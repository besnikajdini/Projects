document.addEventListener('DOMContentLoaded', () => {
    // Translations Configuration
    const translations = {
        en: {
            'nav.home': 'Home',
            'nav.services': 'Services',
            'nav.book': 'Book Now',
            'hero.title': 'Niku Blendz',
            'hero.subtitle': 'Barber Shop',
            'hero.cta': 'See my work',
            'gallery.title': 'Our Work',
            'about.title': 'Who We Are',
            'about.text': "More than just a barber, Niku Blendz is an experience. Located in the heart of the city, we offer modern cuts, traditional shaves, and facial treatments for the man who wants to stand out. Our team of expert barbers is here to listen to you and advise the best look for your face and style.",
            'services.title': 'Our Services',
            'services.haircut': 'Haircut',
            'services.haircut_design': 'Haircut & Design',
            'booking.title': 'Book Your Cut',
            'booking.step1': '1. Choose Service',
            'booking.step2': '2. Choose Date & Time',
            'booking.step3': '3. Your Details',
            'booking.details.name': 'Name and Surname',
            'booking.details.phone': 'Phone',
            'booking.submit': 'Confirm Booking',
            'booking.submit.processing': 'Processing...',
            'booking.confirmation': 'Thanks! Your booking has been received. We will contact you soon for confirmation.',
            'footer.rights': '&copy; 2026 Niku Blendz Barber Shop. All rights reserved.',
            'calendar.select_date': 'Select a date',
            'calendar.placeholder_times': 'Select a day to see available times.',
            'calendar.no_slots': 'No times available for this date.',
            'months': ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            'weekdays_grid': ['M', 'T', 'W', 'T', 'F', 'S', 'S']
        },
        de: {
            'nav.home': 'Home',
            'nav.services': 'Dienstleistungen',
            'nav.book': 'Jetzt buchen',
            'hero.title': 'Niku Blendz',
            'hero.subtitle': 'Barbershop',
            'hero.cta': 'Meine Arbeiten ansehen',
            'gallery.title': 'Unsere Arbeiten',
            'about.title': 'Über Uns',
            'about.text': "Mehr als nur ein Friseur, Niku Blendz ist ein Erlebnis. Im Herzen der Stadt bieten wir moderne Haarschnitte, traditionelle Rasuren und Gesichtsbehandlungen für den Mann, der sich abheben möchte. Unser Team von Experten ist hier, um Ihnen zuzuhören und den besten Look für Ihr Gesicht und Ihren Stil zu empfehlen.",
            'services.title': 'Unsere Dienstleistungen',
            'services.haircut': 'Haarschnitt',
            'services.haircut_design': 'Haarschnitt & Design',
            'booking.title': 'Buche deinen Haarschnitt',
            'booking.step1': '1. Dienstleistung wählen',
            'booking.step2': '2. Datum & Zeit wählen',
            'booking.step3': '3. Deine Daten',
            'booking.details.name': 'Vor- und Nachname',
            'booking.details.phone': 'Telefon',
            'booking.submit': 'Buchung bestätigen',
            'booking.submit.processing': 'Bearbeitung...',
            'booking.confirmation': 'Danke! Deine Buchung wurde empfangen. Wir kontaktieren dich bald zur Bestätigung.',
            'footer.rights': '&copy; 2026 Niku Blendz Barber Shop. Alle Rechte vorbehalten.',
            'calendar.select_date': 'Wähle ein Datum',
            'calendar.placeholder_times': 'Wähle einen Tag, um verfügbare Zeiten zu sehen.',
            'calendar.no_slots': 'Keine Zeiten verfügbar für dieses Datum.',
            'months': ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
            'weekdays_grid': ['M', 'D', 'M', 'D', 'F', 'S', 'S']
        }
    };

    let currentLang = 'en'; // Default set to English as requested
    
    const bookingForm = document.getElementById('bookingForm');
    const confirmationMessage = document.getElementById('confirmationMessage');
    
    // Custom Calendar Logic
    const calendarDays = document.getElementById('calendarDays');
    const monthYear = document.getElementById('monthYear');
    const prevMonthBtn = document.getElementById('prevMonth');
    const nextMonthBtn = document.getElementById('nextMonth');
    const selectedDateDisplay = document.getElementById('selectedDateDisplay');
    const timeSlotsContainer = document.getElementById('timeSlots');
    const selectedDateInput = document.getElementById('selectedDate');
    const selectedTimeInput = document.getElementById('selectedTime');
    const languageSelect = document.getElementById('languageSelect');

    // Sections for visibility control
    const dateTimeSection = document.getElementById('dateTimeSection');
    const detailsSection = document.getElementById('detailsSection');
    const serviceInput = document.getElementById('service');
    const serviceOptions = document.querySelectorAll('.service-option');

    let currentDate = new Date();
    let selectedDate = null;
    let selectedTime = null;
    
    // Language Switching Logic
    function updateLanguage(lang) {
        currentLang = lang;
        const t = translations[lang];
        if (!t) return;

        // Update Text Elements
        document.querySelectorAll('[data-lang-key]').forEach(el => {
            const key = el.getAttribute('data-lang-key');
            if (t[key]) {
                el.innerHTML = t[key]; // innerHTML to handle potential HTML tags like &copy; or formatting
            }
        });

        // Update Calendar Weekdays Header
        if(t.weekdays_grid) {
             const weekdayContainer = document.querySelector('.calendar-weekdays');
             if(weekdayContainer) {
                 weekdayContainer.innerHTML = '';
                 t.weekdays_grid.forEach(d => {
                     const div = document.createElement('div');
                     div.textContent = d;
                     weekdayContainer.appendChild(div);
                 });
             }
        }

        renderCalendar(currentDate);

        // Update Placeholders
        // Not used heavily, but example logic:
        const nameInput = document.getElementById('name');
        if (nameInput) {
            if (lang === 'en') nameInput.placeholder = "John Doe";
            else if (lang === 'de') nameInput.placeholder = "Max Mustermann";
        }
        
        // Clear time slots message if empty
        if (!selectedTime) {
             const placeholderEl = timeSlotsContainer ? timeSlotsContainer.querySelector('.placeholder-text') : null;
             if(placeholderEl) placeholderEl.textContent = t['calendar.placeholder_times'];
        }
    }

    if (languageSelect) {
        languageSelect.addEventListener('change', (e) => {
            updateLanguage(e.target.value);
        });
    }

    // Step 1: Service Selection Listener (Event Delegation - More Robust)
    document.addEventListener('click', (e) => {
        const option = e.target.closest('.service-option');
        if (option) {
            // Find inputs from document to be safe
            const svcInput = document.getElementById('service');
            const dtSection = document.getElementById('dateTimeSection');
            
            if (!svcInput || !dtSection) return;

            // Remove selected class from all
            document.querySelectorAll('.service-option').forEach(opt => opt.classList.remove('selected'));
            
            // Add to clicked
            option.classList.add('selected');
            
            // Update hidden input
            const value = option.getAttribute('data-value');
            svcInput.value = value;
            
            // Show next section
            dtSection.classList.remove('hidden-section');
            dtSection.style.opacity = '1';
            dtSection.style.pointerEvents = 'auto';
            
            // Smooth scroll to next section
            dtSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });

    // Initialize Calendar
    function renderCalendar(date) {
        // Guard clause if calendar elements don't exist (e.g. on homepage)
        if (!calendarDays || !monthYear) return;

        const year = date.getFullYear();
        const month = date.getMonth();
        const t = translations[currentLang];
        
        // Month names
        monthYear.textContent = `${t.months[month]} ${year}`;

        
        // Clear previous days
        calendarDays.innerHTML = '';
        
        // Logic to get days in month
        const firstDayOfMonth = new Date(year, month, 1).getDay(); // 0 is Sunday
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        
        // Adjust first day to Monday start (0=Sun -> 6, 1=Mon -> 0)
        // Standard JS: 0=Sun, 1=Mon...6=Sat. 
        // We want grid: L M M G V S D. So Mon is pos 0.
        // If firstDay is 0 (Sun), position is 6. If 1 (Mon), pos 0.
        let startPos = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;
        
        // Previous month filler
        for (let i = 0; i < startPos; i++) {
            const emptyDiv = document.createElement('div');
            calendarDays.appendChild(emptyDiv);
        }
        
        // Days
        const today = new Date();
        today.setHours(0,0,0,0);
        
        for (let i = 1; i <= daysInMonth; i++) {
            const dayEl = document.createElement('div');
            dayEl.textContent = i;
            dayEl.classList.add('calendar-day');
            
            const currentDayDate = new Date(year, month, i);
            
            // Check if past
            if (currentDayDate < today) {
                dayEl.classList.add('disabled');
            } else {
                dayEl.addEventListener('click', () => selectDate(currentDayDate, dayEl));
            }
            
            // Highlight today
            if (currentDayDate.getTime() === today.getTime()) {
                dayEl.classList.add('today');
            }
            
            // Highlight selected
            if (selectedDate && currentDayDate.getTime() === selectedDate.getTime()) {
                dayEl.classList.add('selected');
            }
            
            calendarDays.appendChild(dayEl);
        }
    }

    function selectDate(date, element) {
        // Update styling
        document.querySelectorAll('.calendar-day').forEach(el => el.classList.remove('selected'));
        element.classList.add('selected');
        
        selectedDate = date;
        selectedDateInput.value = date.toISOString().split('T')[0]; // Format YYYY-MM-DD
        
        // Update display text
        let locale = currentLang === 'de' ? 'de-DE' : 'en-US';
        const options = { weekday: 'long', day: 'numeric', month: 'long' };
        selectedDateDisplay.textContent = date.toLocaleDateString(locale, options);
        
        // Reset selected time
        selectedTime = null;
        selectedTimeInput.value = '';
        
        // Generate Slots
        generateTimeSlots(date);
    }

    function generateTimeSlots(date) {
        timeSlotsContainer.innerHTML = '';
        
        const day = date.getDay(); // 0 is Sunday, 6 is Saturday
        let startHour, endHour;
        const slots = [];

        // Logic based on day of week
        if (day === 0 || day === 6) {
            // Weekend: 15:00 - 19:00
            startHour = 15;
            endHour = 19;
        } else if (day === 5) {
            // Friday: 18:00 - 20:00
            startHour = 18;
            endHour = 20;
        } else {
            // Mon-Thu: 18:00 - 19:00
            startHour = 18;
            endHour = 19;
        }

        // Generate slots every 30 minutes
        let h = startHour;
        let m = 0;
        
        while (h < endHour || (h === endHour && m === 0)) {
            const time = `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`;
            slots.push(time);
            
            m += 30;
            if (m === 60) {
                m = 0;
                h++;
            }
        }
        
        slots.forEach(time => {
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.textContent = time;
            btn.classList.add('time-btn');
            
            btn.addEventListener('click', () => {
                document.querySelectorAll('.time-btn').forEach(b => b.classList.remove('selected'));
                btn.classList.add('selected');
                selectedTime = time;
                selectedTimeInput.value = time;
                
                // Show final section
                detailsSection.classList.remove('hidden-section');
                detailsSection.style.opacity = '1';
                detailsSection.style.pointerEvents = 'auto';
            });
            
            timeSlotsContainer.appendChild(btn);
        });
        
        if (timeSlotsContainer.children.length === 0) {
            const t = translations[currentLang];
            timeSlotsContainer.innerHTML = `<p class="placeholder-text">${t['calendar.no_slots']}</p>`;
        }
    }

    if (prevMonthBtn && nextMonthBtn) {
        prevMonthBtn.addEventListener('click', () => {
            currentDate.setMonth(currentDate.getMonth() - 1);
            renderCalendar(currentDate);
        });
        
        nextMonthBtn.addEventListener('click', () => {
            currentDate.setMonth(currentDate.getMonth() + 1);
            renderCalendar(currentDate);
        });
        
        // Initial render
        renderCalendar(currentDate);
    }


    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form values 
            const name = document.getElementById('name').value;
            const service = document.getElementById('service').value;
            const phone = document.getElementById('phone').value;
            const prefix = document.getElementById('phonePrefix').value;
            // Date and Time are in hidden inputs selectedDateInput / selectedTimeInput

            // Validation
            if (name && service && selectedDateInput.value && selectedTimeInput.value && phone) {
                // Simulate API call/processing time
                const submitBtn = bookingForm.querySelector('.btn-submit');
                const t = translations[currentLang];
                
                submitBtn.textContent = t['booking.submit.processing'];
                submitBtn.disabled = true;

                setTimeout(() => {
                    // Hide form and show confirmation
                    bookingForm.style.display = 'none';
                    confirmationMessage.classList.remove('hidden');
                    
                    console.log(`Prenotazione: ${name}, ${prefix} ${phone}, ${service}, ${selectedDateInput.value} @ ${selectedTimeInput.value}`);
                }, 1500);
            }
        });
    }
});