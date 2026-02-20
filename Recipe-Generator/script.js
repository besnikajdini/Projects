// Translations Dictionary
const translations = {
    it: {
        nav_home: "Home", nav_pantry: "Dispensa", nav_macros: "Macros", nav_mealplan: "Meal Plan", nav_master: "Master Chef", nav_about: "Chi Siamo",
        hero_title: "Cucina. Monitora. <span class='highlight'>Raggiungi.</span>",
        hero_desc: "La tua cucina intelligente. Genera ricette, traccia le calorie e pianifica i tuoi pasti con la potenza dell'IA.",
        hero_btn: "Inizia a Cucinare",
        feat_pantry_title: "Pantry Chef", feat_pantry_desc: "Crea ricette con quello che hai in frigo.",
        feat_macro_title: "Macros Chef", feat_macro_desc: "Analizza i nutrienti dei tuoi piatti.",
        feat_plan_title: "Meal Planner", feat_plan_desc: "Piani alimentari settimanali su misura.",
        feat_master_title: "Master Chef", feat_master_desc: "Chiedi qualsiasi ricetta all'IA.",
        pantry_title: "Pantry Chef", pantry_subtitle: "Compila i campi sottostanti per creare la tua ricetta perfetta.",
        macros_title: "Macros Chef", macros_subtitle: "Crea la ricetta perfetta basata sui tuoi obiettivi nutrizionali.",
        mealplan_title: "MealPlan Chef", mealplan_subtitle: "Piani alimentari su misura per il tuo stile di vita.",
        master_title: "Master Chef", master_subtitle: "Ispiratevi con i vostri gusti o con una ricetta specifica.",
        
        // Form Labels
        pantry_label_1: "1. Aggiungi gli ingredienti che hai a casa",
        pantry_label_2: "2. Scegli quale pasto vuoi cucinare",
        pantry_label_3: "3. Scegli gli utensili da cucina che hai",
        pantry_label_4: "4. Scegli quanto tempo hai a disposizione",
        pantry_label_5: "5. Scegli il tuo livello di abilità",
        pantry_label_6: "6. Scegli la Modalità Chef desiderata",
        pantry_cta_desc: "7. Premi il pulsante Genera e attendi che la magia accada.",
        
        // Macros Form
        macros_label_1: "1. Seleziona il macro obiettivo",
        macros_label_2: "2. Seleziona il pasto",
        macros_label_3: "3. Seleziona le tue esigenze dietetiche",
        macros_cta_desc: "4. Genera la tua Ricetta.",

        // MealPlan Form
        mealplan_label_1: "1. Rendi il tuo Piano Alimentare personale",
        mealplan_label_2: "2. Seleziona il tuo Obiettivo",
        mealplan_label_3: "3. Seleziona il livello di Attività",
        mealplan_label_4: "4. Seleziona le esigenze dietetiche",
        mealplan_label_5: "5. Seleziona la durata",
        mealplan_cta_desc: "6. Genera il tuo Piano Alimentare.",

        // Master Form
        master_label_1: "1. Ispirate MasterChef con i vostri gusti",
        master_label_2: "2. Selezionate la quantità di porzioni",
        master_label_3: "3. Scegliete quanto tempo avete a disposizione",
        master_label_4: "4. Selezionate il vostro livello di abilità",
        master_label_5: "5. Selezionate le vostre esigenze alimentari",
        master_cta_desc: "6. Genera la tua Ricetta.",

        btn_generate: "Genera la tua Ricetta",
        
        about_title: "La Nostra Storia",
        about_subtitle: "Da un'idea scolastica a un assistente personale in cucina.",
        about_how_title: "Come è nata l'idea?",
        about_how_text_1: "Tutto è iniziato tra i banchi di scuola a Baden. Ci siamo chiesti: \"Perché sprechiamo così tanto cibo solo perché non sappiamo cosa cucinare?\"",
        about_how_text_2: "Ispirati dalle potenzialità dell'Intelligenza Artificiale, abbiamo deciso di creare <strong>ChefAI</strong>.",
        about_mission_title: "La nostra missione",
        mission_1: "Ridurre lo spreco alimentare domestico.",
        mission_2: "Rendere la cucina sana accessibile a tutti.",
        mission_3: "Semplificare la pianificazione dei pasti.",
        
        // Dropdown Options
        opt_breakfast: "Colazione", opt_lunch: "Pranzo", opt_snack: "Spuntino", opt_dinner: "Cena",
        opt_30_min: "30 Minuti (Veloce)", opt_60_min: "1 Ora (Medio)", opt_180_min: "3 Ore (Lento)",
        opt_beginner: "Principiante", opt_intermediate: "Intermedio", opt_expert: "Esperto",
        mode_all_title: "Tutto-Incluso", mode_all_desc: "Usa solo i tuoi ingredienti",
        mode_gourmet_title: "Gourmet", mode_gourmet_desc: "Usa anche ingredienti extra",
        opt_none: "Nessuna", opt_vegetarian: "Vegetariano", opt_pescetarian: "Pescetariano", opt_vegan: "Vegano",
        opt_gluten_free: "Senza Glutine", opt_lactose_free: "Senza Lattosio", opt_keto: "Keto", opt_paleo: "Paleo",
        opt_male: "Uomo", opt_female: "Donna",
        opt_healthy: "Mangiare Sano", opt_muscle: "Aumentare i Muscoli", opt_weight_loss: "Perdita Peso",
        opt_sedentary: "Sedentario (Poco movimento)", opt_light: "Leggermente Attivo (1-3 gg/sett)",
        opt_moderate: "Moderatamente Attivo (3-5 gg/sett)", opt_active: "Molto Attivo (6-7 gg/sett)",
        opt_3_days: "3 Giorni", opt_5_days: "5 Giorni", opt_7_days: "7 Giorni (Settimana)", opt_14_days: "14 Giorni",
        opt_5_min: "5 min (Di fretta)", opt_15_min: "15 min", opt_45_min: "45 min", opt_60_plus_min: "60+ min",
        opt_none_all: "Nessuna (Tutto)"
    },
    en: {
        nav_home: "Home", nav_pantry: "Pantry", nav_macros: "Macros", nav_mealplan: "Meal Plan", nav_master: "Master Chef", nav_about: "About Us",
        hero_title: "Cook. Track. <span class='highlight'>Achieve.</span>",
        hero_desc: "Your smart kitchen. Generate recipes, track calories, and plan your meals with the power of AI.",
        hero_btn: "Start Cooking",
        feat_pantry_title: "Pantry Chef", feat_pantry_desc: "Create recipes with what you have in the fridge.",
        feat_macro_title: "Macros Chef", feat_macro_desc: "Analyze nutrients in your dishes.",
        feat_plan_title: "Meal Planner", feat_plan_desc: "Tailor-made weekly meal plans.",
        feat_master_title: "Master Chef", feat_master_desc: "Ask AI for any recipe.",
        pantry_title: "Pantry Chef", pantry_subtitle: "Fill in the fields below to create your perfect recipe.",
        macros_title: "Macros Chef", macros_subtitle: "Create the perfect recipe based on your nutritional goals.",
        mealplan_title: "MealPlan Chef", mealplan_subtitle: "Meal plans tailored to your lifestyle.",
        master_title: "Master Chef", master_subtitle: "Get inspired by your tastes or a specific recipe.",
        
        pantry_label_1: "1. Add ingredients you have at home",
        pantry_label_2: "2. Choose which meal you want to cook",
        pantry_label_3: "3. Choose kitchen utensils you have",
        pantry_label_4: "4. Choose how much time you have",
        pantry_label_5: "5. Choose your skill level",
        pantry_label_6: "6. Choose desired Chef Mode",
        pantry_cta_desc: "7. Press Generate and wait for the magic to happen.",
        
        // Macros Form
        macros_label_1: "1. Select macro goal",
        macros_label_2: "2. Select meal",
        macros_label_3: "3. Select dietary needs",
        macros_cta_desc: "4. Generate your Recipe.",

        // MealPlan Form
        mealplan_label_1: "1. Personalize your Meal Plan",
        mealplan_label_2: "2. Select your Goal",
        mealplan_label_3: "3. Select Activity Level",
        mealplan_label_4: "4. Select dietary needs",
        mealplan_label_5: "5. Select duration",
        mealplan_cta_desc: "6. Generate your Meal Plan.",

        // Master Form
        master_label_1: "1. Inspire MasterChef with your tastes",
        master_label_2: "2. Select number of servings",
        master_label_3: "3. Choose how much time you have",
        master_label_4: "4. Select your skill level",
        master_label_5: "5. Select your dietary needs",
        master_cta_desc: "6. Generate your Recipe.",

        btn_generate: "Generate Recipe",
        
        about_title: "Our Story",
        about_subtitle: "From a school idea to a personal kitchen assistant.",
        about_how_title: "How did it start?",
        about_how_text_1: "It all started in a classroom in Baden. We asked ourselves: \"Why do we waste so much food just because we don't know what to cook?\"",
        about_how_text_2: "Inspired by the potential of AI, we decided to create <strong>ChefAI</strong>.",
        about_mission_title: "Our Mission",
        mission_1: "Reduce household food waste.",
        mission_2: "Make healthy cooking accessible to everyone.",
        mission_3: "Simplify meal planning.",
        
        // Dropdown Options
        opt_breakfast: "Breakfast", opt_lunch: "Lunch", opt_snack: "Snack", opt_dinner: "Dinner",
        opt_30_min: "30 Minutes (Quick)", opt_60_min: "1 Hour (Medium)", opt_180_min: "3 Hours (Slow)",
        opt_beginner: "Beginner", opt_intermediate: "Intermediate", opt_expert: "Expert",
        mode_all_title: "All-Inclusive", mode_all_desc: "Use only your ingredients",
        mode_gourmet_title: "Gourmet", mode_gourmet_desc: "Use extra ingredients too",
        opt_none: "None", opt_vegetarian: "Vegetarian", opt_pescetarian: "Pescetarian", opt_vegan: "Vegan",
        opt_gluten_free: "Gluten-Free", opt_lactose_free: "Lactose-Free", opt_keto: "Keto", opt_paleo: "Paleo",
        opt_male: "Male", opt_female: "Female",
        opt_healthy: "Healthy Eating", opt_muscle: "Muscle Gain", opt_weight_loss: "Weight Loss",
        opt_sedentary: "Sedentary (Little movement)", opt_light: "Lightly Active (1-3 days/week)",
        opt_moderate: "Moderately Active (3-5 days/week)", opt_active: "Very Active (6-7 days/week)",
        opt_3_days: "3 Days", opt_5_days: "5 Days", opt_7_days: "7 Days (Week)", opt_14_days: "14 Days",
        opt_5_min: "5 min (Rush)", opt_15_min: "15 min", opt_45_min: "45 min", opt_60_plus_min: "60+ min",
        opt_none_all: "None (All)"
    },
    de: {
        nav_home: "Home", nav_pantry: "Vorrat", nav_macros: "Makros", nav_mealplan: "Essensplan", nav_master: "Meisterkoch", nav_about: "Über Uns",
        hero_title: "Kochen. Tracken. <span class='highlight'>Erreichen.</span>",
        hero_desc: "Deine intelligente Küche. Generiere Rezepte, verfolge Kalorien und plane deine Mahlzeiten mit der Kraft der KI.",
        hero_btn: "Jetzt Kochen",
        feat_pantry_title: "Pantry Chef", feat_pantry_desc: "Erstelle Rezepte mit dem, was im Kühlschrank ist.",
        feat_macro_title: "Macros Chef", feat_macro_desc: "Analysiere Nährstoffe in deinen Gerichten.",
        feat_plan_title: "Meal Planner", feat_plan_desc: "Maßgeschneiderte Wochenpläne.",
        feat_master_title: "Master Chef", feat_master_desc: "Frag die KI nach jedem Rezept.",
        pantry_title: "Pantry Chef", pantry_subtitle: "Fülle die Felder unten aus, um dein perfektes Rezept zu erstellen.",
        macros_title: "Macros Chef", macros_subtitle: "Erstelle das perfekte Rezept basierend auf deinen Ernährungszielen.",
        mealplan_title: "MealPlan Chef", mealplan_subtitle: "Essenspläne, abgestimmt auf deinen Lebensstil.",
        master_title: "Master Chef", master_subtitle: "Lass dich von deinem Geschmack oder einem bestimmten Rezept inspirieren.",
        
        pantry_label_1: "1. Füge Zutaten hinzu, die du zu Hause hast",
        pantry_label_2: "2. Wähle die Mahlzeit",
        pantry_label_3: "3. Wähle deine Küchenutensilien",
        pantry_label_4: "4. Wähle deine verfügbare Zeit",
        pantry_label_5: "5. Wähle dein Fähigkeitslevel",
        pantry_label_6: "6. Wähle den gewünschten Chef-Modus",
        pantry_cta_desc: "7. Drücke Generieren und warte auf die Magie.",
        
        // Macros Form
        macros_label_1: "1. Wähle Makro-Ziel",
        macros_label_2: "2. Wähle Mahlzeit",
        macros_label_3: "3. Wähle Ernährungsbedürfnisse",
        macros_cta_desc: "4. Generiere dein Rezept.",

        // MealPlan Form
        mealplan_label_1: "1. Personalisiere deinen Essensplan",
        mealplan_label_2: "2. Wähle dein Ziel",
        mealplan_label_3: "3. Wähle Aktivitätslevel",
        mealplan_label_4: "4. Wähle Ernährungsbedürfnisse",
        mealplan_label_5: "5. Wähle Dauer",
        mealplan_cta_desc: "6. Generiere deinen Essensplan.",

        // Master Form
        master_label_1: "1. Inspiriere MasterChef mit deinem Geschmack",
        master_label_2: "2. Wähle Portionsgröße",
        master_label_3: "3. Wähle deine verfügbare Zeit",
        master_label_4: "4. Wähle dein Fähigkeitslevel",
        master_label_5: "5. Wähle deine Ernährungsbedürfnisse",
        master_cta_desc: "6. Generiere dein Rezept.",

        btn_generate: "Rezept Generieren",
        
        about_title: "Unsere Geschichte",
        about_subtitle: "Von einer Schulidee zum persönlichen Küchenassistenten.",
        about_how_title: "Wie hat es angefangen?",
        about_how_text_1: "Alles begann in einem Klassenzimmer in Baden. Wir fragten uns: \"Warum verschwenden wir so viel Essen, nur weil wir nicht wissen, was wir kochen sollen?\"",
        about_how_text_2: "Inspiriert vom Potenzial der KI beschlossen wir, <strong>ChefAI</strong> zu erschaffen.",
        about_mission_title: "Unsere Mission",
        mission_1: "Haushaltslebensmittelabfälle reduzieren.",
        mission_2: "Gesundes Kochen für alle zugänglich machen.",
        mission_3: "Essensplanung vereinfachen.",
        
        // Dropdown Options
        opt_breakfast: "Frühstück", opt_lunch: "Mittagessen", opt_snack: "Snack", opt_dinner: "Abendessen",
        opt_30_min: "30 Minuten (Schnell)", opt_60_min: "1 Stunde (Mittel)", opt_180_min: "3 Stunden (Langsam)",
        opt_beginner: "Anfänger", opt_intermediate: "Mittel", opt_expert: "Experte",
        mode_all_title: "All-Inclusive", mode_all_desc: "Nur deine Zutaten",
        mode_gourmet_title: "Gourmet", mode_gourmet_desc: "Auch extra Zutaten",
        opt_none: "Keine", opt_vegetarian: "Vegetarisch", opt_pescetarian: "Pescetarisch", opt_vegan: "Vegan",
        opt_gluten_free: "Glutenfrei", opt_lactose_free: "Laktosefrei", opt_keto: "Keto", opt_paleo: "Paleo",
        opt_male: "Mann", opt_female: "Frau",
        opt_healthy: "Gesund Essen", opt_muscle: "Muskelaufbau", opt_weight_loss: "Gewichtsverlust",
        opt_sedentary: "Sedentär (Wenig Bewegung)", opt_light: "Leicht Aktiv (1-3 Tage/Wo)",
        opt_moderate: "Moderat Aktiv (3-5 Tage/Wo)", opt_active: "Sehr Aktiv (6-7 Tage/Wo)",
        opt_3_days: "3 Tage", opt_5_days: "5 Tage", opt_7_days: "7 Tage (Woche)", opt_14_days: "14 Tage",
        opt_5_min: "5 min (Eilig)", opt_15_min: "15 min", opt_45_min: "45 min", opt_60_plus_min: "60+ min",
        opt_none_all: "Keine (Alles)"
    }
};

// --- MOCK RECIPES DATABASE ---
const mockRecipes = [
    {
        id: 1,
        title: "Spaghetti alla Carbonara",
        img: "https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg",
        time: "25 min",
        kcal: "450 kcal",
        ingredients: ["uova", "pecorino", "guanciale", "pepe", "spaghetti", "pasta", "formaggio"],
        fullIngredients: [
            "320g Spaghetti",
            "150g Guanciale",
            "6 Tuorli d'uovo",
            "50g Pecorino Romano grattugiato",
            "Pepe nero macinato fresco"
        ],
        steps: [
            "Mettere una pentola d'acqua sul fuoco per la pasta, con poco sale.",
            "Tagliare il guanciale a listarelle e rosolarlo in padella senza olio fino a renderlo croccante.",
            "In una ciotola, sbattere i tuorli con il pecorino e un'abbondante macinata di pepe fino a ottenere una crema liscia.",
            "Scolare la pasta al dente direttamente nella padella col guanciale (fuori dal fuoco).",
            "Aggiungere un mestolo di acqua di cottura e saltare per raffreddare leggermente.",
            "Unire la crema di uova e mescolare energicamente (lontano dal fuoco) per creare una salsa cremosa senza cuocere l'uovo.",
            "Servire immediatamente con altro pecorino e pepe."
        ]
    },
    {
        id: 2,
        title: "Insalata di Pollo e Avocado",
        img: "https://www.themealdb.com/images/media/meals/pk8wtn1763758591.jpg",
        time: "15 min",
        kcal: "320 kcal",
        ingredients: ["pollo", "avocado", "lattuga", "pomodorini", "olio", "limone", "insalata"],
        fullIngredients: [
            "200g Petto di pollo grigliato",
            "1 Avocado maturo",
            "100g Lattuga mista",
            "10 Pomodorini ciliegino",
            "Olio EVO, Limone, Sale"
        ],
        steps: [
            "Grigliare il petto di pollo e tagliarlo a striscioline.",
            "Lavare la lattuga e tagliare i pomodorini a metà.",
            "Sbucciare l'avocado e tagliarlo a cubetti.",
            "In una ciotola grande, unire tutti gli ingredienti.",
            "Condire con una emulsione di olio, succo di limone e sale.",
            "Mescolare delicatamente e servire."
        ]
    },
    {
        id: 3,
        title: "Pancake Proteici alla Banana",
        img: "https://www.themealdb.com/images/media/meals/sywswr1511383814.jpg",
        time: "20 min",
        kcal: "280 kcal",
        ingredients: ["uova", "banana", "farina d'avena", "latte", "pancake", "colazione"],
        fullIngredients: [
            "200g Farina d'avena",
            "2 Banane mature",
            "2 Uova",
            "100ml Latte (o bevanda vegetale)",
            "1 cucchiaino di lievito per dolci"
        ],
        steps: [
            "Schiacciare le banane con una forchetta in una ciotola.",
            "Aggiungere le uova e mescolare bene.",
            "Incorporare la farina d'avena e il lievito, aggiungendo latte fino a ottenere una pastella densa.",
            "Scaldare una padella antiaderente leggermente unta.",
            "Versare un mestolo di impasto e cuocere per 2-3 minuti per lato.",
            "Servire con sciroppo d'acero o frutta fresca."
        ]
    },
    {
        id: 4,
        title: "Salmone al Forno con Patate",
        img: "https://www.themealdb.com/images/media/meals/1548772327.jpg",
        time: "40 min",
        kcal: "500 kcal",
        ingredients: ["salmone", "patate", "rosmarino", "limone", "olio", "pesce"],
        fullIngredients: [
            "2 Filetti di salmone",
            "4 Patate medie",
            "Rametti di rosmarino",
            "3 cucchiai di Olio EVO",
            "Fettine di limone"
        ],
        steps: [
            "Preriscaldare il forno a 200°C.",
            "Sbucciare le patate e tagliarle a spicchi. Condirle con olio e rosmarino.",
            "Mettere le patate in una teglia e cuocere per 20 minuti.",
            "Aggiungere i filetti di salmone nella teglia, condire con sale e limone.",
            "Infornare per altri 15-20 minuti fino a cottura del pesce.",
            "Servire caldo."
        ]
    },
    {
        id: 5,
        title: "Torta di Mele della Nonna",
        img: "https://www.themealdb.com/images/media/meals/wxywrq1468235067.jpg",
        time: "60 min",
        kcal: "350 kcal",
        ingredients: ["mele", "farina", "zucchero", "uova", "burro", "latte", "dolce", "torta", "frutta"],
        fullIngredients: [
            "3 Mele Golden",
            "200g Farina 00",
            "150g Zucchero",
            "2 Uova",
            "100g Burro fuso",
            "1 bustina di lievito"
        ],
        steps: [
            "Sbucciare le mele e tagliarle a fettine sottili.",
            "Montare uova e zucchero fino a ottenere un composto spumoso.",
            "Aggiungere farina, lievito e burro fuso, mescolando bene.",
            "Imburrare una tortiera e versare l'impasto.",
            "Disporre le mele a raggiera sulla superficie.",
            "Cuocere in forno a 180°C per 40-45 minuti."
        ]
    },
    {
        id: 6,
        title: "Pizza Margherita Fatta in Casa",
        img: "https://www.themealdb.com/images/media/meals/x0lk931587671540.jpg",
        time: "120 min",
        kcal: "600 kcal",
        ingredients: ["farina", "lievito", "pomodoro", "mozzarella", "olio", "basilico", "pizza"],
        fullIngredients: [
            "500g Farina",
            "300ml Acqua",
            "10g Lievito di birra",
            "Passata di pomodoro",
            "250g Mozzarella",
            "Basilico fresco"
        ],
        steps: [
            "Impastare farina, acqua, lievito e un pizzico di sale fino a ottenere un panetto liscio.",
            "Lasciare lievitare coperto per 2 ore.",
            "Stendere l'impasto in una teglia oliata.",
            "Condire con pomodoro e olio. Infornare al massimo della temperatura per 10 minuti.",
            "Aggiungere la mozzarella e cuocere altri 5 minuti.",
            "Guarnire con basilico fresco."
        ]
    }
];

// --- TRANSLATION DICTIONARY (Italian -> English) ---
const itToEn = {
    // Carne / Meat
    "pollo": "chicken", "petti di pollo": "chicken_breast",
    "manzo": "beef", "bistecca": "steak", "macinato": "minced_meat",
    "maiale": "pork", "salsiccia": "sausage", "pancetta": "bacon", "guanciale": "bacon", "prosciutto": "ham",
    "agnello": "lamb",
    
    // Pesce / Fish
    "pesce": "fish", "pesci": "fish",
    "salmone": "salmon",
    "tonno": "tuna",
    "gamberi": "shrimp", "gambero": "shrimp", "gamberetti": "shrimp",
    
    // Latticini / Dairy
    "uova": "egg", "uovo": "egg",
    "formaggio": "cheese", "mozzarella": "mozzarella", "parmigiano": "parmesan", "pecorino": "pecorino",
    "latte": "milk",
    "burro": "butter",
    "panna": "cream", "yogurt": "yogurt",

    // Verdure / Vegetables
    "pomodoro": "tomato", "pomodori": "tomato", "passata": "tomato_sauce",
    "patate": "potato", "patata": "potato",
    "cipolla": "onion", "cipolle": "onion",
    "aglio": "garlic",
    "carote": "carrot", "carota": "carrot",
    "zucchine": "zucchini", "zucchina": "zucchini",
    "melanzane": "eggplant", "melanzana": "eggplant",
    "peperoni": "pepper", "peperone": "pepper",
    "spinaci": "spinach",
    "insalata": "lettuce", "lattuga": "lettuce",
    "funghi": "mushroom", "fungo": "mushroom",
    "broccolo": "broccoli", "broccoli": "broccoli",

    // Dispensa / Pantry
    "pasta": "pasta", "spaghetti": "spaghetti", "penne": "penne",
    "riso": "rice",
    "pane": "bread",
    "farina": "flour",
    "zucchero": "sugar",
    "sale": "salt", "pepe": "pepper",
    "olio": "olive_oil", "aceto": "vinegar",
    "miele": "honey",

    // Frutta / Fruits
    "mela": "apple", "mele": "apple",
    "banana": "banana", "banane": "banana",
    "fragola": "strawberry", "fragole": "strawberry",
    "limone": "lemon", "limoni": "lemon",
    "arancia": "orange", "arance": "orange",

    // Altro
    "cioccolato": "chocolate",
    "torta": "cake", "dolce": "dessert",
    "pizza": "pizza",
    "hamburger": "burger"
};

// Helper: Translate query by checking all words
function translateQuery(query) {
    if (!query) return "";
    
    // 1. Check exact match first
    const exactMatch = query.toLowerCase().trim();
    if (itToEn[exactMatch]) return itToEn[exactMatch];

    // 2. Split and translate identifying words
    const words = exactMatch.split(/[ ,]+/);
    const translatedIngredients = [];

    for (const w of words) {
        // Skip common short words that aren't ingredients
        if (w.length < 3) continue; 
        
        if (itToEn[w]) {
            translatedIngredients.push(itToEn[w]);
        }
    }

    // Return comma-separated English ingredients if found, else return the main English word found, else original
    return translatedIngredients.length > 0 ? translatedIngredients.join(',') : query;
}

// --- CORE LOGIC ---

// Language Changer
function changeLanguage(lang) {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });
}

// Event Listener for Language Selector
document.addEventListener('DOMContentLoaded', () => {
    const langSelector = document.getElementById('language-selector');
    if (langSelector) {
        langSelector.addEventListener('change', (e) => {
            changeLanguage(e.target.value);
        });
    }
});

// Navigation Logic
function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
    document.querySelectorAll('.nav-links li').forEach(li => {
        li.classList.remove('active');
        if (li.textContent.toLowerCase().includes(sectionId === 'home' ? 'home' : 
           sectionId === 'pantry' ? 'dispensa' :
           sectionId === 'macros' ? 'macros' :
           sectionId === 'mealplan' ? 'meal plan' : '')) { 
            li.classList.add('active');
        }
    });
}

// Utensils Logic
function toggleUtensil(btn) {
    btn.classList.toggle('selected');
    updateUtensilsInput();
}

function updateUtensilsInput() {
    const selected = Array.from(document.querySelectorAll('.utensil-btn.selected'))
        .map(btn => btn.getAttribute('data-value'));
    const hiddenInput = document.getElementById('pantry-utensils');
    if (hiddenInput) {
        hiddenInput.value = selected.join(',');
    }
}

// --- GENERATORS ---

// 1. Pantry Chef (Hybrid: Mock -> API)
async function generatePantryRecipes() {
    const input = document.getElementById('pantry-ingredients').value.toLowerCase();
    const resultsContainer = document.getElementById('pantry-results');
    
    if (!input) {
        alert("Inserisci qualche ingrediente!");
        return;
    }

    resultsContainer.innerHTML = '<p style="text-align:center;">Cerco nella dispensa e nel mondo... 🌍</p>';
    
    // 1. Try Local Mock Data first
    const inputWords = input.split(',').map(w => w.trim()).filter(w => w.length > 0);
    const localMatches = mockRecipes.filter(recipe => {
        return inputWords.some(word => 
            recipe.ingredients.some(ing => ing.includes(word))
        );
    });

    if (localMatches.length > 0) {
        let html = '<h3 style="text-align:center; width:100%; margin-bottom:1rem;">Ricette Italiane Trovate:</h3>';
        localMatches.forEach(recipe => {
            html += createRecipeCard(recipe);
        });
        resultsContainer.innerHTML = html;
        return; // Stop if we found local matches (preferred)
    }

    // 2. If no local matches, try External API (TheMealDB)
    const translatedTerm = translateQuery(inputWords[0] || "");
    
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${translatedTerm}`);
        const data = await response.json();

        if (data.meals) {
            let html = '<h3 style="text-align:center; width:100%; margin-bottom:1rem; color:var(--primary-color);">Ricette dal Mondo (English):</h3>';
            // Show max 6 world recipes
            data.meals.slice(0, 6).forEach(meal => {
                // Convert API simplified object to Card format
                // Note: filter.php only returns ID, Title, Image. We use a special ID flag.
                html += createRecipeCard({
                    id: "API_" + meal.idMeal, // Prefix to identify API call needed
                    title: meal.strMeal,
                    img: meal.strMealThumb,
                    time: "30-45 min", 
                    kcal: "Variabile"
                });
            });
            resultsContainer.innerHTML = html;
        } else {
             resultsContainer.innerHTML = `
                <div style="text-align:center;">
                    <p>Non ho trovato nulla per "<strong>${input}</strong>" (nemmeno come "${translatedTerm}"). 😔</p>
                    <p>Prova ingredienti semplici come: pollo, pasta, uova, riso.</p>
                </div>
            `;
        }
    } catch (error) {
        console.error(error);
        resultsContainer.innerHTML = '<p style="text-align:center; color:red;">Errore di connessione al database mondiale.</p>';
    }
}

// 2. Macros Chef (Simulated)
function generateMacroRecipes() {
    const carbs = document.getElementById('macro-carbs').value;
    const protein = document.getElementById('macro-protein').value;
    const fats = document.getElementById('macro-fats').value;
    const resultsContainer = document.getElementById('macro-results');

    if (!carbs || !protein || !fats) {
        alert("Inserisci tutti i valori!");
        return;
    }

    resultsContainer.innerHTML = '<p style="text-align:center;">Calcolando... 🧮</p>';

    setTimeout(() => {
        const randomRecipe = mockRecipes[1]; 
        resultsContainer.innerHTML = `
            <div class="macro-card" style="display:block; text-align:center;">
                <h3>${randomRecipe.title} (Personalizzata)</h3>
                <p>Adattata ai tuoi obiettivi: ${carbs}g Carbo, ${protein}g Prot, ${fats}g Grassi</p>
                <div style="display:flex; justify-content:center; gap: 1rem; margin:1rem 0;">
                    <span style="color:#e74c3c;">Calorie Totali: ${(carbs*4 + protein*4 + fats*9)}</span>
                </div>
                <button class="action-btn" onclick="openRecipeModal(${randomRecipe.id})">Vedi Procedura</button>
            </div>
        `;
    }, 1500);
}

// 3. Meal Plan (Simulated)
function generateMealPlan() {
    const goal = document.getElementById('plan-goal').value;
    const resultsContainer = document.getElementById('mealplan-results');

    resultsContainer.innerHTML = '<p style="text-align:center;">Generando piano... 📅</p>';

    setTimeout(() => {
        resultsContainer.innerHTML = `
            <div class="plan-card" style="display:block;">
                <h3>Il tuo Piano: ${goal.toUpperCase()}</h3>
                <ul style="list-style:none;">
                    <li style="margin-bottom:1rem;"><strong>Lunedì:</strong> Pancake Proteici (Colazione), Insalata di Pollo (Pranzo), Salmone al Forno (Cena)</li>
                    <li style="margin-bottom:1rem;"><strong>Martedì:</strong> Yogurt e Frutta (Colazione), Pasta al Pomodoro (Pranzo), Frittata (Cena)</li>
                    <li style="margin-bottom:1rem;"><strong>Mercoledì:</strong> Porridge (Colazione), Riso e Tacchino (Pranzo), Minestrone (Cena)</li>
                </ul>
                <p style="text-align:center; font-size:0.9rem; color:#7f8c8d;">Clicca sulle ricette nella Dispensa per vedere come prepararle!</p>
            </div>
        `;
    }, 1500);
}

// 4. Master Chef (Search by Name - Hybrid)
async function searchRecipe() {
    const query = document.getElementById('master-input').value.toLowerCase();
    const resultsContainer = document.getElementById('master-results');

    if (!query) return;

    resultsContainer.innerHTML = '<p style="text-align:center;">Cerco nel ricettario segreto e globale... 📖</p>';

    // 1. Local Search
    const localMatches = mockRecipes.filter(recipe => 
        recipe.title.toLowerCase().includes(query) || 
        recipe.ingredients.some(ing => ing.includes(query))
    );

    let finalHtml = "";

    if (localMatches.length > 0) {
        finalHtml += '<h3 style="text-align:center; width:100%; margin-bottom:1rem;">Ricette Italiane:</h3>';
        localMatches.forEach(recipe => finalHtml += createRecipeCard(recipe));
    }

    // 2. Global API Search
    const translatedTerm = translateQuery(query);
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${translatedTerm}`);
        const data = await response.json();

        if (data.meals) {
            finalHtml += '<h3 style="text-align:center; width:100%; margin:2rem 0 1rem 0; color:var(--primary-color);">Risultati Globali (English):</h3>';
            data.meals.slice(0, 5).forEach(meal => {
                 finalHtml += createRecipeCard({
                    id: "API_" + meal.idMeal,
                    title: meal.strMeal,
                    img: meal.strMealThumb,
                    time: "Variabile", 
                    kcal: "Sconosciute"
                });
            });
        }
    } catch (e) { console.error("API Error", e); }

    if (finalHtml === "") {
        finalHtml = '<p style="text-align:center;">Nessuna ricetta trovata. Prova "Pasta", "Pollo", "Cake".</p>';
    }

    resultsContainer.innerHTML = finalHtml;
}

// Helper: Create Recipe HTML Card
function createRecipeCard(recipe) {
    return `
    <div class="recipe-card">
        <img src="${recipe.img}" alt="${recipe.title}" class="recipe-img">
        <div class="recipe-info">
            <h3>${recipe.title}</h3>
            <div class="recipe-meta">
                <span><i class="fa-regular fa-clock"></i> ${recipe.time}</span>
                <span><i class="fa-solid fa-fire"></i> ${recipe.kcal}</span>
            </div>
            <button class="action-btn" style="margin-top:1rem; font-size:0.9rem; padding:0.5rem;" onclick="openRecipeModal(${recipe.id})">
                Vedi Procedura Completa <i class="fa-solid fa-eye"></i>
            </button>
        </div>
    </div>`;
}

// --- MODAL LOGIC ---

async function openRecipeModal(id) {
    const modalBody = document.getElementById('modal-body');
    
    // Check if it's an API ID (starts with "API_")
    if (typeof id === 'string' && id.startsWith('API_')) {
        const apiId = id.replace('API_', '');
        
        // Show loading state
        modalBody.innerHTML = '<p style="text-align:center; padding:2rem;">Caricamento dettagli dal mondo... ⏳</p>';
        document.getElementById('recipe-modal').classList.add('visible');

        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${apiId}`);
            const data = await response.json();
            const meal = data.meals[0];

            // Parse Ingredients from API (strIngredient1...20)
            const ingredients = [];
            for (let i = 1; i <= 20; i++) {
                const ing = meal[`strIngredient${i}`];
                const serve = meal[`strMeasure${i}`];
                if (ing && ing.trim()) {
                    ingredients.push(`${serve} ${ing}`);
                }
            }

            // Parse Steps (usually one blob, try to split by newline or dot)
            let steps = meal.strInstructions.split(/\r\n|\n|\./).filter(s => s.trim().length > 5);

            modalBody.innerHTML = generateModalHTML({
                title: meal.strMeal,
                img: meal.strMealThumb,
                time: "Vedi Procedura",
                kcal: "N/A",
                fullIngredients: ingredients,
                steps: steps,
                details: `Origine: ${meal.strArea} | Categoria: ${meal.strCategory}`
            });

        } catch (e) {
            modalBody.innerHTML = '<p style="color:red; text-align:center;">Errore caricamento dettagli.</p>';
        }

    } else {
        // Local Mock Data
        const recipe = mockRecipes.find(r => r.id === id);
        if (!recipe) return;

        modalBody.innerHTML = generateModalHTML({
            title: recipe.title,
            img: recipe.img,
            time: recipe.time,
            kcal: recipe.kcal,
            fullIngredients: recipe.fullIngredients,
            steps: recipe.steps,
            details: "Ricetta Italiana Originale 🇮🇹"
        });
        document.getElementById('recipe-modal').classList.add('visible');
    }
}

// Helper: Common HTML Generator for Modal
function generateModalHTML(data) {
    const ingredientsList = data.fullIngredients.map(ing => `<li>${ing}</li>`).join('');
    const stepsList = data.steps.map(step => `<li>${step}</li>`).join('');

    return `
        <div class="modal-header">
            <img src="${data.img}" class="modal-img" alt="${data.title}">
            <h2>${data.title}</h2>
        </div>
        
        <div class="modal-details">
            <span><i class="fa-regular fa-clock"></i> ${data.time}</span>
            <span><i class="fa-solid fa-fire"></i> ${data.kcal}</span>
            <span><i class="fa-solid fa-globe"></i> ${data.details}</span>
        </div>

        <div class="modal-section">
            <h3><i class="fa-solid fa-basket-shopping"></i> Ingredienti</h3>
            <ul>${ingredientsList}</ul>
        </div>

        <div class="modal-section">
            <h3><i class="fa-solid fa-hat-chef"></i> Procedimento</h3>
            <ol>${stepsList}</ol>
        </div>
    `;
}

function closeModal() {
    document.getElementById('recipe-modal').classList.remove('visible');
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('recipe-modal');
    if (event.target === modal) {
        closeModal();
    }
}
