// C:\Users\PL2\Documents\site\basic-site\app.js
document.addEventListener('DOMContentLoaded', () => {
    // Interactivité simple pour tous les boutons "Réserver/Louer"
    const buttons = document.querySelectorAll('button');
    
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const btnText = e.target.textContent;
            
            if (btnText.includes('Louer') || btnText.includes('Réserver')) {
                alert('Merci de votre intérêt ! Cette interface est une démonstration.');
            } else if (btnText.includes('Voir nos offres')) {
                document.getElementById('fleet').scrollIntoView({ behavior: 'smooth' });
            } else if (btnText.includes('En savoir plus')) {
                alert('Découvrez DriveEase : La location de véhicules premium nouvelle génération.');
            }
        });
    });

    // Effet de parallaxe léger sur le background hero
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const hero = document.querySelector('.hero');
        if (hero) {
            // Un effet simple où on déplace très légèrement le background selon le scroll
            hero.style.backgroundPositionY = -(scrolled * 0.1) + 'px';
        }
    });

    console.log("DriveEase Application Loaded - Ready for GitHub Pages.");
});
