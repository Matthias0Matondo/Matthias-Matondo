// Animation au défilement pour le footer
window.addEventListener('scroll', function () {
    const footer = document.querySelector('footer');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 100) {
        footer.style.transform = 'translateY(0)';
        footer.style.opacity = '1';
    } else {
        footer.style.transform = 'translateY(100px)';
        footer.style.opacity = '0.5';
    }
});

document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Empêche la soumission classique du formulaire

    let isValid = true;

    // Réinitialiser les messages d'erreur
    document.getElementById('nomError').textContent = '';
    document.getElementById('prénomError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('objetError').textContent = '';
    document.getElementById('messageError').textContent = '';

    // Validation des champs
    const nom = document.getElementById('nom').value.trim();
    const prénom = document.getElementById('prénom').value.trim();
    const email = document.getElementById('email').value.trim();
    const objet = document.getElementById('objet').value;
    const message = document.getElementById('message').value.trim();

    if (!nom) {
        document.getElementById('nomError').textContent = 'Le nom est requis.';
        isValid = false;
    }
    if (!prénom) {
        document.getElementById('prénomError').textContent = 'Le prénom est requis.';
        isValid = false;
    }
    if (!email) {
        document.getElementById('emailError').textContent = 'L\'email est requis.';
        isValid = false;
    }
    if (!objet) {
        document.getElementById('objetError').textContent = 'L\'objet est requis.';
        isValid = false;
    }
    if (!message) {
        document.getElementById('messageError').textContent = 'Le message est requis.';
        isValid = false;
    }

    // Si le formulaire est valide, envoyer les données
    if (isValid) {
        const formData = new FormData(event.target);

        fetch(event.target.action, {
            method: event.target.method,
            body: formData,
            headers: {
                Accept: 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                alert('Votre message a été envoyé avec succès !');
                event.target.reset(); // Réinitialiser le formulaire
            } else {
                alert('Erreur lors de l\'envoi du message, veuillez réessayer.');
            }
        })
        .catch(error => {
            console.error('Erreur lors de l\'envoi:', error);
            alert('Une erreur est survenue, veuillez réessayer.');
        });
    }
});
