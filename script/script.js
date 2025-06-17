// Ottieni gli elementi del DOM
var lightbox = document.getElementById('lightbox');
var lightboxImg = document.getElementById('img01');
var captionText = document.getElementById('caption');
var closeButton = document.getElementsByClassName('close-button')[0];

// Ottieni TUTTE le miniature che devono aprire il lightbox
var triggers = document.getElementsByClassName('my-lightbox-trigger');

// Itera su ogni miniatura e aggiungi l'evento click
for (var i = 0; i < triggers.length; i++) {
    var trigger = triggers[i];
    trigger.onclick = function () {
        lightbox.style.display = "flex"; // Rende visibile il lightbox (uso flex per centrare)

        // Prende il percorso dell'immagine grande dall'attributo data-src della miniatura cliccata
        lightboxImg.src = this.getAttribute('data-src');

        // Prende la descrizione dall'attributo data-alt della miniatura cliccata
        captionText.innerHTML = this.getAttribute('data-alt');
    };
}

// Quando l'utente clicca sul pulsante di chiusura (x), chiudi la lightbox
closeButton.onclick = function () {
    lightbox.style.display = "none";
}

// Quando l'utente clicca fuori dalla lightbox, chiudi la lightbox
window.onclick = function (event) {
    if (event.target == lightbox) {
        lightbox.style.display = "none";
    }
}