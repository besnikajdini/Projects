gsap.registerPlugin(ScrollTrigger);
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Ticker
const tickerData = [
  {l:'ACCURACY',v:'54.7%',c:'up'},{l:'BASELINE',v:'51.2%',c:''},{l:'SHARPE',v:'0.61',c:'up'},
  {l:'MAX DD',v:'-14.2%',c:'down'},{l:'RMSE',v:'$4.82',c:''},{l:'AVG FOLD',v:'54.3%',c:'up'},
  {l:'TRADES',v:'47',c:''},{l:'PERIOD',v:'2015–2026',c:''},
];
const tEl=document.getElementById('ticker');
const tHtml=tickerData.map(t=>`<span class="tick">${t.l} <b class="${t.c}">${t.v}</b></span>`).join('');
tEl.innerHTML=tHtml+tHtml;
if(!reduced){ gsap.to(tEl,{xPercent:-50,duration:30,ease:'none',repeat:-1}); }

// Candlestick chart (deterministic demo OHLC)
(function(){
  const svg=document.getElementById('candlesChart');
  const w=480,h=280,pad=14,n=32;
  let seed=7; function rand(){ seed=(seed*16807)%2147483647; return seed/2147483647; }
  let price=178, candles=[];
  for(let i=0;i<n;i++){
    const open=price;
    const close=open + (rand()-0.47)*6;
    const high=Math.max(open,close)+rand()*3;
    const low=Math.min(open,close)-rand()*3;
    candles.push({open,high,low,close});
    price=close;
  }
  const allV=candles.flatMap(c=>[c.high,c.low]);
  const min=Math.min(...allV),max=Math.max(...allV);
  const cw=(w-pad*2)/n;
  const y=v=>h-pad-((v-min)/(max-min))*(h-pad*2);
  let svgEls='';
  candles.forEach((c,i)=>{
    const cx=pad+i*cw+cw/2;
    const up=c.close>=c.open;
    const color=up?'#22C55E':'#F16A5E';
    const bodyTop=y(Math.max(c.open,c.close));
    const bodyBot=y(Math.min(c.open,c.close));
    const bodyH=Math.max(bodyBot-bodyTop,1.5);
    svgEls+=`<g class="candle" data-i="${i}" style="opacity:0">
      <line x1="${cx}" y1="${y(c.high)}" x2="${cx}" y2="${y(c.low)}" stroke="${color}" stroke-width="1"/>
      <rect x="${cx-cw*0.32}" y="${bodyTop}" width="${cw*0.64}" height="${bodyH}" fill="${color}"/>
    </g>`;
  });
  svg.innerHTML=svgEls;
  const groups=svg.querySelectorAll('.candle');
  if(!reduced){
    ScrollTrigger.create({ trigger:svg, start:'top 85%', once:true,
      onEnter:()=> gsap.to(groups,{opacity:1,duration:0.25,stagger:0.025,ease:'power1.out'})
    });
  } else { groups.forEach(g=>g.style.opacity=1); }
})();

// ---------- Give the nav a solid background once the intro animation is scrolled past ----------
// Transparent works fine over the intro (it's all dark there); once real sections start
// scrolling underneath — some with a light background — plain transparency makes the text vanish.
(function(){
  const navEl = document.querySelector('nav');
  const introRoot = document.getElementById('scrollExpandRoot');
  if(!navEl || !introRoot) return;
  const io = new IntersectionObserver(entries=>{
    entries.forEach(en=>{
      navEl.classList.toggle('nav-solid', !en.isIntersecting);
    });
  }, {threshold:0});
  io.observe(introRoot);
})();

// ---------- Copy-to-clipboard buttons ----------
document.querySelectorAll('[data-copy-target]').forEach(btn=>{
  const defaultLabel = btn.textContent;
  btn.addEventListener('click', async ()=>{
    const target = document.getElementById(btn.dataset.copyTarget);
    if(!target) return;
    try{
      await navigator.clipboard.writeText(target.textContent.trim());
      btn.textContent = '✓ Copied';
      btn.classList.add('btn-success');
    }catch(err){
      btn.textContent = 'Copy failed — select manually';
      btn.classList.add('btn-error');
    }
    setTimeout(()=>{
      btn.textContent = defaultLabel;
      btn.classList.remove('btn-success','btn-error');
    }, 2500);
  });
});

// ---------- Newsletter form: real validation + success/error feedback ----------
(function(){
  const form = document.getElementById('newsletterForm');
  if(!form) return;
  const status = document.getElementById('newsletterStatus');
  const emailInput = document.getElementById('newsletterEmail');
  const btn = form.querySelector('button[type="submit"]');
  const defaultLabel = btn.textContent;

  form.addEventListener('submit', e=>{
    e.preventDefault();
    const email = emailInput.value.trim();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if(!valid){
      status.textContent = 'Enter a valid email address.';
      status.className = 'form-status error reveal';
      emailInput.focus();
      return;
    }
    btn.textContent = 'Subscribed ✓';
    status.textContent = "You're on the list. (Front-end demo — see the Privacy page.)";
    status.className = 'form-status success reveal';
    form.reset();
    setTimeout(()=>{ btn.textContent = defaultLabel; }, 4000);
  });
})();

// Hero entrance
window.addEventListener('load',()=>{
  if(reduced){
    document.querySelectorAll('[data-count]').forEach(el=>{ el.textContent=parseFloat(el.dataset.count).toFixed(1)+(el.dataset.suffix||''); });
    return;
  }
  const tl=gsap.timeline({delay:0.1});
  tl.from('.eyebrow',{opacity:0,y:10,duration:0.5})
    .from('#hero-title .word',{opacity:0,y:26,duration:0.6,stagger:0.04,ease:'power3.out'},'-=0.25')
    .from('.hero p.lead',{opacity:0,y:12,duration:0.5},'-=0.3')
    .from('.hero-cta .btn',{opacity:0,y:10,duration:0.4,stagger:0.07},'-=0.25')
    .from('.hero-stats > div',{opacity:0,y:12,duration:0.45,stagger:0.06},'-=0.2')
    .from('.chart-panel',{opacity:0,x:24,duration:0.7,ease:'power2.out'},'-=0.9');
  document.querySelectorAll('[data-count]').forEach(el=>{
    const target=parseFloat(el.dataset.count), suffix=el.dataset.suffix||'', obj={v:0};
    tl.to(obj,{v:target,duration:1.1,ease:'power2.out',onUpdate:()=>el.textContent=obj.v.toFixed(1)+suffix},'-=0.5');
  });
});

// Scroll reveal
gsap.utils.toArray('.reveal').forEach(el=>{
  if(reduced){ el.style.opacity=1; return; }
  gsap.fromTo(el,{opacity:0,y:14},{opacity:1,y:0,duration:0.55,ease:'power1.out',
    scrollTrigger:{trigger:el,start:'top 88%',toggleActions:'play none none reverse'}});
});

// Tilt cards + magnetic buttons
if(!reduced && window.matchMedia('(hover: hover)').matches){
  document.querySelectorAll('.tilt-card').forEach(card=>{
    const xTo=gsap.quickTo(card,'rotateY',{duration:0.4,ease:'power2.out'});
    const yTo=gsap.quickTo(card,'rotateX',{duration:0.4,ease:'power2.out'});
    const liftTo=gsap.quickTo(card,'y',{duration:0.3,ease:'power2.out'});
    card.style.transformPerspective=600;
    card.addEventListener('pointermove',e=>{
      const r=card.getBoundingClientRect();
      xTo(((e.clientX-r.left)/r.width-0.5)*5); yTo(-((e.clientY-r.top)/r.height-0.5)*5); liftTo(-2);
    });
    card.addEventListener('pointerleave',()=>{xTo(0);yTo(0);liftTo(0);});
  });
  document.querySelectorAll('.magnetic').forEach(btn=>{
    const xTo=gsap.quickTo(btn,'x',{duration:0.3,ease:'power2.out'});
    const yTo=gsap.quickTo(btn,'y',{duration:0.3,ease:'power2.out'});
    btn.addEventListener('pointermove',e=>{
      const r=btn.getBoundingClientRect();
      xTo((e.clientX-r.left-r.width/2)*0.25); yTo((e.clientY-r.top-r.height/2)*0.25);
    });
    btn.addEventListener('pointerleave',()=>{xTo(0);yTo(0);});
  });
}

const hoverCapable = window.matchMedia('(hover: hover)').matches && window.innerWidth > 900;

// ---------- Spotlight follows mouse (hero only) ----------
if(!reduced && hoverCapable){
  const heroEl=document.querySelector('.hero');
  const spot=document.getElementById('spotlight');
  heroEl.addEventListener('pointermove',e=>{
    const r=heroEl.getBoundingClientRect();
    spot.style.setProperty('--sx', ((e.clientX-r.left)/r.width*100)+'%');
    spot.style.setProperty('--sy', ((e.clientY-r.top)/r.height*100)+'%');
  });
}

// ---------- Subtle animated grain ----------
// Rendered at a fraction of screen resolution (CSS stretches it back up) and with a
// reused buffer, since a full-resolution random fill every frame is the biggest CPU cost on the page.
(function(){
  const canvas=document.getElementById('grain');
  const ctx=canvas.getContext('2d');
  const SCALE=0.4;
  let w,h,imgData,buf;
  function resize(){
    w=canvas.width=Math.max(1,Math.round(window.innerWidth*SCALE));
    h=canvas.height=Math.max(1,Math.round(window.innerHeight*SCALE));
    imgData=ctx.createImageData(w,h);
    buf=new Uint32Array(imgData.data.buffer);
  }
  resize(); window.addEventListener('resize',resize);
  function draw(){
    for(let i=0;i<buf.length;i++){
      const v=(Math.random()*255)|0;
      buf[i]=(255<<24)|(v<<16)|(v<<8)|v;
    }
    ctx.putImageData(imgData,0,0);
  }
  if(!reduced){
    let last=0;
    function loop(t){
      if(!document.hidden && t-last>120){ draw(); last=t; }
      requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);
  } else { canvas.style.display='none'; }
})();

// ---------- Pin-scroll horizontal pipeline ----------
if(!reduced && window.innerWidth > 900){
  const track=document.getElementById('pinTrack');
  const wrap=document.querySelector('.pin-wrap');
  const bar=document.getElementById('pinProgress');
  requestAnimationFrame(()=>{
    const distance = track.scrollWidth - window.innerWidth + 56;
    gsap.to(track,{
      x: -distance, ease:'none',
      scrollTrigger:{
        trigger: wrap, start:'top top', end:'+=' + (distance+window.innerHeight*0.6),
        scrub:0.8, pin: '.pin-stage', anticipatePin:1,
        onUpdate: self => bar.style.width = (self.progress*100)+'%'
      }
    });
  });
}

// ---------- Mask heading reveal (h2) ----------
gsap.utils.toArray('h2').forEach(h=>{
  if(reduced) return;
  const text=h.innerHTML;
  h.classList.add('mask');
  h.innerHTML = `<span class="mask-inner">${text}</span>`;
  gsap.fromTo(h.querySelector('.mask-inner'), {yPercent:110}, {
    yPercent:0, duration:0.7, ease:'power3.out',
    scrollTrigger:{trigger:h, start:'top 90%', toggleActions:'play none none reverse'}
  });
});

// ===== ScrollExpand — ported from React Bits (ScrollExpand-JS-CSS) to vanilla JS =====
(function(){
  const reducedSE = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const root = document.getElementById('scrollExpandRoot');
  if(!root) return;
  const track = document.getElementById('seTrack');
  const stage = document.getElementById('seStage');
  const frame = document.getElementById('seFrame');
  const media = document.getElementById('seMedia');
  const titleEl = document.getElementById('seTitle');
  const overlayEl = document.getElementById('seOverlay');
  const scrimEl = document.getElementById('seScrim');
  const hintEl = document.getElementById('seHint');
  const canvas = document.getElementById('seCanvas');
  const ctx = canvas.getContext('2d');

  // same defaults as the React component's props
  const cfg = {
    startWidth:42, startHeight:58, startRadius:24, endRadius:0,
    mediaZoom:1.35, scrollDistance:1.2, holdDistance:0.35,
    smoothing: reducedSE ? 0 : 0.1, overlayScrim:0.55
  };

  const clamp=(v,a,b)=> v<a?a:(v>b?b:v);
  const smoothstep=(e0,e1,x)=>{ const t=clamp((x-e0)/((e1-e0)||1e-6),0,1); return t*t*(3-2*t); };

  let stageH=0, current=0, target=0, raf=0, running=false;

  function applyProgress(p){
    const e = smoothstep(0,1,p);
    const w = cfg.startWidth + (100-cfg.startWidth)*e;
    const h = cfg.startHeight + (100-cfg.startHeight)*e;
    const ix = Math.max(0,(100-w)/2), iy = Math.max(0,(100-h)/2);
    const r = cfg.startRadius + (cfg.endRadius-cfg.startRadius)*e;
    frame.style.clipPath = `inset(${iy}% ${ix}% ${iy}% ${ix}% round ${r}px)`;
    media.style.transform = `scale(${cfg.mediaZoom + (1-cfg.mediaZoom)*e})`;
    if(scrimEl) scrimEl.style.opacity = String(cfg.overlayScrim*e);
    if(titleEl){
      const out = smoothstep(0.4,0.88,p);
      titleEl.style.opacity = String(1-out);
      titleEl.style.transform = `translate3d(0, ${-28*out}px, 0) scale(${1+0.06*out})`;
    }
    if(hintEl){
      const gone = smoothstep(0,0.12,p);
      hintEl.style.opacity = String(1-gone);
      hintEl.style.transform = `translate3d(0, ${8*gone}px, 0)`;
    }
    if(overlayEl){
      const inn = smoothstep(0.68,1,p);
      overlayEl.style.opacity = String(inn);
      overlayEl.style.transform = `translate3d(0, ${18*(1-inn)}px, 0)`;
    }
  }

  function measure(){
    stageH = window.innerHeight;
    stage.style.height = stageH+'px';
    track.style.height = (stageH*(1+Math.max(0,cfg.scrollDistance)+Math.max(0,cfg.holdDistance)))+'px';
    const w = root.clientWidth || stageH;
    stage.style.setProperty('--se-title-size', clamp(w*0.075,20,84)+'px');
  }
  function readProgress(){
    const span = stageH*Math.max(0.01,cfg.scrollDistance);
    const top = track.getBoundingClientRect().top;
    return clamp(-top/span,0,1);
  }
  function tick(){
    const k = cfg.smoothing<=0?1:1-Math.exp(-1/(60*cfg.smoothing));
    current += (target-current)*k;
    if(Math.abs(target-current)<0.0004){ current=target; running=false; }
    applyProgress(current);
    raf = running?requestAnimationFrame(tick):0;
  }
  function kick(){ if(running) return; running=true; if(!raf) raf=requestAnimationFrame(tick); }
  function onScroll(){
    target = readProgress();
    if(cfg.smoothing<=0){ current=target; applyProgress(current); return; }
    kick();
  }
  function onResize(){ measure(); target=readProgress(); current=target; applyProgress(current); drawChart(); }

  // deterministic "equity line" art drawn on the canvas media, matches the site's brand
  function drawChart(){
    const dpr = Math.min(window.devicePixelRatio||1,2);
    const rect = canvas.getBoundingClientRect();
    canvas.width = Math.max(1,rect.width*dpr); canvas.height = Math.max(1,rect.height*dpr);
    ctx.setTransform(dpr,0,0,dpr,0,0);
    const w=rect.width,h=rect.height;
    ctx.clearRect(0,0,w,h);
    const bg = ctx.createLinearGradient(0,0,0,h);
    bg.addColorStop(0,'#0B0E14'); bg.addColorStop(1,'#050608');
    ctx.fillStyle=bg; ctx.fillRect(0,0,w,h);
    let seed=99; function rand(){ seed=(seed*16807)%2147483647; return seed/2147483647; }
    const n=90; let pts=[]; let y=h*0.6;
    for(let i=0;i<n;i++){ y += (rand()-0.47)*h*0.045; y=Math.max(h*0.15,Math.min(h*0.85,y)); pts.push(y); }
    ctx.beginPath();
    pts.forEach((py,i)=>{ const px=(i/(n-1))*w; if(i===0) ctx.moveTo(px,py); else ctx.lineTo(px,py); });
    ctx.lineTo(w,h); ctx.lineTo(0,h); ctx.closePath();
    const fill=ctx.createLinearGradient(0,0,0,h);
    fill.addColorStop(0,'rgba(34,197,94,0.35)'); fill.addColorStop(1,'rgba(34,197,94,0)');
    ctx.fillStyle=fill; ctx.fill();
    ctx.beginPath();
    pts.forEach((py,i)=>{ const px=(i/(n-1))*w; if(i===0) ctx.moveTo(px,py); else ctx.lineTo(px,py); });
    ctx.strokeStyle='#22C55E'; ctx.lineWidth=2; ctx.stroke();
  }

  measure(); drawChart(); target=readProgress(); current=target; applyProgress(current);
  window.addEventListener('scroll', onScroll, {passive:true});
  window.addEventListener('resize', onResize);
})();

// ===== Lightfall — ported from React Bits (Lightfall-JS-CSS) to vanilla WebGL (no ogl dependency) =====
(function(){
  const reducedLF = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const VERT = `
attribute vec2 position;
attribute vec2 uv;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}`;

  const FRAG = `
precision highp float;
uniform vec3  iResolution;
uniform vec2  iMouse;
uniform float iTime;
uniform vec3  uColor0; uniform vec3 uColor1; uniform vec3 uColor2; uniform vec3 uColor3;
uniform vec3  uColor4; uniform vec3 uColor5; uniform vec3 uColor6; uniform vec3 uColor7;
uniform int   uColorCount;
uniform vec3  uBgColor;
uniform vec3  uMouseColor;
uniform float uSpeed;
uniform int   uStreakCount;
uniform float uStreakWidth;
uniform float uStreakLength;
uniform float uGlow;
uniform float uDensity;
uniform float uTwinkle;
uniform float uZoom;
uniform float uBgGlow;
uniform float uOpacity;
uniform float uMouseEnabled;
uniform float uMouseStrength;
uniform float uMouseRadius;
uniform float uLightMode;
varying vec2 vUv;

vec3 palette(float h) {
  int count = uColorCount;
  if (count < 1) count = 1;
  int idx = int(floor(clamp(h, 0.0, 0.999999) * float(count)));
  if (idx <= 0) return uColor0;
  if (idx == 1) return uColor1;
  if (idx == 2) return uColor2;
  if (idx == 3) return uColor3;
  if (idx == 4) return uColor4;
  if (idx == 5) return uColor5;
  if (idx == 6) return uColor6;
  return uColor7;
}
vec3 tanhv(vec3 x) { vec3 e = exp(-2.0 * x); return (1.0 - e) / (1.0 + e); }
vec2 sceneC(vec2 frag, vec2 r) {
  vec2 P = (frag + frag - r) / r.x;
  float z = 0.0; float d = 1e3; vec4 O = vec4(0.0);
  for (int k = 0; k < 39; k++) {
    if (d <= 1e-4) break;
    O = z * normalize(vec4(P, uZoom, 0.0)) - vec4(0.0, 4.0, 1.0, 0.0) / 4.5;
    d = 1.0 - sqrt(length(O * O));
    z += d;
  }
  return vec2(O.x, atan(O.z, O.y));
}
void mainImage(out vec4 o, vec2 C) {
  vec2 r = iResolution.xy;
  vec2 uv0 = (C + C - r) / r.x;
  float T = 0.1 * iTime * uSpeed + 9.0;
  float angRings = max(1.0, floor(6.28318530718 * max(uDensity, 0.05) + 0.5));
  vec2 Y = vec2(5e-3, 6.28318530718 / angRings);
  vec2 c0 = sceneC(C, r);
  vec2 cdx = sceneC(C + vec2(1.0, 0.0), r);
  vec2 cdy = sceneC(C + vec2(0.0, 1.0), r);
  vec2 dCx = cdx - c0; vec2 dCy = cdy - c0;
  dCx.y -= 6.28318530718 * floor(dCx.y / 6.28318530718 + 0.5);
  dCy.y -= 6.28318530718 * floor(dCy.y / 6.28318530718 + 0.5);
  vec2 fw = abs(dCx) + abs(dCy);
  C = c0;
  vec2 P = vec2(2.0, 1.0) * uv0 - (r / r.x) * vec2(0.0, 1.0);
  vec4 O = uLightMode > 0.5 ? vec4(0.0) : vec4(uBgColor * 90.0 * uBgGlow / (1e3 * dot(P, P) + 6.0), 0.0);
  float mGlow = 0.0;
  if (uMouseEnabled > 0.5) {
    vec2 mN = (iMouse + iMouse - r) / r.x;
    float md = length(uv0 - mN);
    mGlow = exp(-md * md / max(uMouseRadius * uMouseRadius, 1e-4)) * uMouseStrength;
    O.rgb += uMouseColor * mGlow * 0.25;
  }
  float zr = 5e-4 * uStreakWidth;
  vec2 rr = vec2(max(length(fw), 1e-5));
  float tail = 19.0 / max(uStreakLength, 0.05);
  for (int m = 0; m < 16; m++) {
    if (m >= uStreakCount) break;
    float jf = float(m) + 1.0;
    float ic = fract(sin(dot(vec2(jf, floor(C.x / Y.x + 0.5)), vec2(7.0, 11.0)) * 73.0));
    vec2 Pp = C - (T + T * ic) * vec2(0.0, 1.0);
    Pp -= floor(Pp / Y + 0.5) * Y;
    float h = fract(8663.0 * ic);
    vec3 col = palette(h);
    float weight = mix(1.5, 1.0 + sin(T + 7.0 * h + 4.0), uTwinkle);
    weight *= (1.0 + mGlow * 2.0);
    vec2 inner = vec2(length(max(Pp, vec2(-1.0, 0.0))), length(Pp) - zr) - zr;
    vec2 sm = vec2(1.0) - smoothstep(-rr, rr, inner);
    O.rgb += dot(sm, vec2(exp(tail * Pp.y), 3.0)) * col * weight;
    C.x += Y.x / 8.0;
  }
  vec3 colr = sqrt(tanhv(max(O.rgb * uGlow - vec3(0.04, 0.08, 0.02), 0.0)));
  if (uLightMode > 0.5) {
    float peak = max(colr.r, max(colr.g, colr.b));
    float coverage = smoothstep(0.035, 0.58, peak) * uOpacity;
    vec3 chroma = clamp(colr / max(peak, 1e-4), 0.0, 1.0);
    chroma = pow(chroma, vec3(1.35));
    float chromaPeak = max(chroma.r, max(chroma.g, chroma.b));
    chroma /= max(chromaPeak, 1e-4);
    o = vec4(mix(vec3(1.0), chroma, coverage * 0.94), 1.0);
  } else {
    o = vec4(colr, uOpacity);
  }
}
void main() { vec4 color; mainImage(color, vUv * iResolution.xy); gl_FragColor = color; }`;

  function hexToRGB(hex){
    const c = hex.replace('#','').padEnd(6,'0');
    return [parseInt(c.slice(0,2),16)/255, parseInt(c.slice(2,4),16)/255, parseInt(c.slice(4,6),16)/255];
  }
  function prepColors(input){
    const base = (input && input.length ? input : ['#2FD9C4','#D9A227','#22C55E']).slice(0,8);
    const count = base.length;
    const arr = [];
    for(let i=0;i<8;i++) arr.push(hexToRGB(base[Math.min(i, base.length-1)]));
    const avg=[0,0,0];
    for(let i=0;i<count;i++){ avg[0]+=arr[i][0]; avg[1]+=arr[i][1]; avg[2]+=arr[i][2]; }
    avg[0]/=count; avg[1]/=count; avg[2]/=count;
    return {arr, count, avg};
  }
  function compile(gl, type, src){
    const sh = gl.createShader(type);
    gl.shaderSource(sh, src); gl.compileShader(sh);
    if(!gl.getShaderParameter(sh, gl.COMPILE_STATUS)){ console.error(gl.getShaderInfoLog(sh)); }
    return sh;
  }

  function initLightfall(container, opts){
    if(!container) return;
    const canvas = document.createElement('canvas');
    canvas.style.width='100%'; canvas.style.height='100%'; canvas.style.display='block';
    container.appendChild(canvas);
    const gl = canvas.getContext('webgl',{alpha:true,antialias:true}) || canvas.getContext('experimental-webgl',{alpha:true,antialias:true});
    if(!gl){ container.style.display='none'; return; }

    const vs = compile(gl, gl.VERTEX_SHADER, VERT);
    const fs = compile(gl, gl.FRAGMENT_SHADER, FRAG);
    const program = gl.createProgram();
    gl.attachShader(program, vs); gl.attachShader(program, fs); gl.linkProgram(program);
    if(!gl.getProgramParameter(program, gl.LINK_STATUS)){ console.error(gl.getProgramInfoLog(program)); return; }
    gl.useProgram(program);

    // full-screen triangle (covers NDC without needing a quad)
    const positions = new Float32Array([-1,-1, 3,-1, -1,3]);
    const uvs = new Float32Array([0,0, 2,0, 0,2]);
    const posBuf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, posBuf); gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);
    const posLoc = gl.getAttribLocation(program, 'position');
    gl.enableVertexAttribArray(posLoc); gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);
    const uvBuf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, uvBuf); gl.bufferData(gl.ARRAY_BUFFER, uvs, gl.STATIC_DRAW);
    const uvLoc = gl.getAttribLocation(program, 'uv');
    gl.enableVertexAttribArray(uvLoc); gl.vertexAttribPointer(uvLoc, 2, gl.FLOAT, false, 0, 0);

    const {arr, count, avg} = prepColors(opts.colors);
    const U = name => gl.getUniformLocation(program, name);
    const u = {
      iResolution:U('iResolution'), iMouse:U('iMouse'), iTime:U('iTime'),
      col:[0,1,2,3,4,5,6,7].map(i=>U('uColor'+i)),
      colorCount:U('uColorCount'), bgColor:U('uBgColor'), mouseColor:U('uMouseColor'),
      speed:U('uSpeed'), streakCount:U('uStreakCount'), streakWidth:U('uStreakWidth'),
      streakLength:U('uStreakLength'), glow:U('uGlow'), density:U('uDensity'), twinkle:U('uTwinkle'),
      zoom:U('uZoom'), bgGlow:U('uBgGlow'), opacity:U('uOpacity'), mouseEnabled:U('uMouseEnabled'),
      mouseStrength:U('uMouseStrength'), mouseRadius:U('uMouseRadius'), lightMode:U('uLightMode')
    };
    arr.forEach((c,i)=> gl.uniform3fv(u.col[i], c));
    gl.uniform1i(u.colorCount, count);
    gl.uniform3fv(u.bgColor, hexToRGB(opts.backgroundColor||'#0B0E14'));
    gl.uniform3fv(u.mouseColor, avg);
    gl.uniform1f(u.speed, opts.speed ?? 0.5);
    gl.uniform1i(u.streakCount, Math.max(1, Math.min(16, Math.round(opts.streakCount ?? 2))));
    gl.uniform1f(u.streakWidth, opts.streakWidth ?? 1);
    gl.uniform1f(u.streakLength, opts.streakLength ?? 1);
    gl.uniform1f(u.glow, opts.glow ?? 1);
    gl.uniform1f(u.density, opts.density ?? 0.6);
    gl.uniform1f(u.twinkle, opts.twinkle ?? 1);
    gl.uniform1f(u.zoom, opts.zoom ?? 3);
    gl.uniform1f(u.bgGlow, opts.backgroundGlow ?? 0.5);
    gl.uniform1f(u.opacity, opts.opacity ?? 1);
    gl.uniform1f(u.mouseEnabled, opts.mouseInteraction ? 1 : 0);
    gl.uniform1f(u.mouseStrength, opts.mouseStrength ?? 0.5);
    gl.uniform1f(u.mouseRadius, opts.mouseRadius ?? 1);
    gl.uniform1f(u.lightMode, opts.lightMode ? 1 : 0);

    let dpr = Math.min(window.devicePixelRatio||1, 1.5);
    function resize(){
      const rect = container.getBoundingClientRect();
      const w = Math.max(1, Math.round(rect.width*dpr)), h = Math.max(1, Math.round(rect.height*dpr));
      canvas.width = w; canvas.height = h;
      gl.viewport(0,0,w,h);
      gl.uniform3f(u.iResolution, w, h, 1);
    }
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(container);

    let mouseTarget=[0,0], mouseCur=[0,0], lastT=0;
    const dampening = opts.mouseDampening ?? 0.15;
    if(opts.mouseInteraction){
      window.addEventListener('pointermove', e=>{
        const rect = canvas.getBoundingClientRect();
        const x = (e.clientX-rect.left) * dpr;
        const y = (rect.height - (e.clientY-rect.top)) * dpr;
        mouseTarget = [x,y];
        if(dampening<=0) mouseCur=[x,y];
      }, {passive:true});
    }

    // The shader is expensive (nested raymarch loop per pixel) — only draw while the
    // container is actually on screen, instead of burning GPU on a section nobody sees yet.
    let onScreen = true;
    const io = new IntersectionObserver(entries=>{
      entries.forEach(en=>{ onScreen = en.isIntersecting; });
    }, {threshold:0});
    io.observe(container);

    function frame(t){
      if(onScreen && !document.hidden){
        gl.uniform1f(u.iTime, t*0.001);
        if(opts.mouseInteraction && dampening>0){
          if(!lastT) lastT=t;
          const dt=(t-lastT)/1000; lastT=t;
          const factor=Math.min(1, 1-Math.exp(-dt/Math.max(1e-4,dampening)));
          mouseCur[0]+=(mouseTarget[0]-mouseCur[0])*factor;
          mouseCur[1]+=(mouseTarget[1]-mouseCur[1])*factor;
        }
        gl.uniform2f(u.iMouse, mouseCur[0], mouseCur[1]);
        gl.drawArrays(gl.TRIANGLES, 0, 3);
      } else {
        lastT=0;
      }
      if(!reducedLF) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
    if(reducedLF){ /* render a single static frame, no continuous loop */ }
  }

  const baseCfg = {
    colors: ['#2FD9C4', '#D9A227', '#22C55E'],
    backgroundColor: '#0B0E14',
    speed: 1, streakCount: 8, streakWidth: 1, streakLength: 1,
    glow: 1, density: 1, twinkle: 1, zoom: 2, backgroundGlow: 1, opacity: 1,
    mouseInteraction: true, mouseStrength: 1, mouseRadius: 0.6
  };

  initLightfall(document.getElementById('lfNewsletter'), Object.assign({}, baseCfg, { lightMode:true, opacity:0.8, backgroundColor:'#F4F1EA' }));
})();
