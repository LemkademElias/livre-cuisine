// Sélection des cartes
let cards = document.querySelectorAll('.card');

cards.forEach(function(card) {

    // Survol de la carte
    card.addEventListener('mouseenter', function() {
        card.style.backgroundColor = '#f8d7da';
    });

    // Sortie de la souris de la carte
    card.addEventListener('mouseleave', function() {
        card.style.backgroundColor = '';
    });

    // Clique sur la carte
    card.addEventListener('click', function() {
        card.style.boxShadow = '0 0 20px rgba(0, 0, 0, 0.6)';
    });

    // Double clique sur l'image de la carte
    let image = card.querySelector('img');

    image.addEventListener('dblclick', function() {
        card.remove();
    });
});

// Footer - inscription newsletter
let boutonNewsletter = document.getElementById('subscribeBtn');
let champEmail = document.getElementById('newsletterEmail');

boutonNewsletter.addEventListener('click', function() {
    let email = champEmail.value;

    if (email === '') {
        alert("Veuillez entrer une adresse email !");
    } else {
        alert("Merci de vous être inscrit à la newsletter !");
        champEmail.value = '';
    }
});

// Lien "Recettes du chef" avec confirmation avant redirection
let lienRecettes = document.querySelector('a[href="https://lemkademelias.github.io/livre-cuisine/ "]');

lienRecettes.addEventListener('click', function(event) {
    event.preventDefault();

    let confirmation = confirm("Voulez-vous vraiment visiter les recettes du chef ?");

    if (confirmation) {
        window.location.href = lienRecettes.href;
    }
});
