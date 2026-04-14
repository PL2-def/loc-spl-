// DriveEase - Application Logic
document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Navbar Scroll Effect ---
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // --- 2. Reveal on Scroll Animation ---
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target); // Anim only once
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // --- 3. Modal Logic ---
    const modal = document.getElementById('booking-modal');
    const modalCarName = document.getElementById('modal-car-name');
    const closeBtn = document.querySelector('.close-modal');
    const bookingForm = document.getElementById('booking-form');
    const successMsg = document.getElementById('form-success');

    // Open Modal
    document.querySelectorAll('.book-btn, #header-book').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const carName = e.target.getAttribute('data-car') || 'véhicule';
            modalCarName.textContent = carName;
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Prevent scroll
            
            // Reset form if it was successful before
            bookingForm.classList.remove('hidden');
            successMsg.classList.add('hidden');
        });
    });

    // Close Modal
    const closeModal = () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    };

    closeBtn.addEventListener('click', closeModal);
    window.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    // --- 4. Form Submission Mock ---
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Disable button and show loading state if desired
        const submitBtn = bookingForm.querySelector('button');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Traitement...';
        submitBtn.disabled = true;

        setTimeout(() => {
            bookingForm.classList.add('hidden');
            successMsg.classList.remove('hidden');
            
            // Re-enable after a delay or just leave it for UX
            setTimeout(() => {
                closeModal();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 3000);
        }, 1500);
    });

    // --- 5. Hero Action Buttons ---
    const heroOffers = document.getElementById('hero-offers');
    if (heroOffers) {
        heroOffers.addEventListener('click', () => {
            document.getElementById('fleet').scrollIntoView({ behavior: 'smooth' });
        });
    }

    const heroMore = document.getElementById('hero-more');
    if (heroMore) {
        heroMore.addEventListener('click', () => {
            alert('DriveEase est le leader de la location premium depuis 2024. Notre flotte est renouvelée tous les 6 mois.');
        });
    }

    console.log("DriveEase Premium Experience Initialized.");
});
