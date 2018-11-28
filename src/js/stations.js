/**
 * ETML
 * Auteur : Valentin Kaelin
 * Date : 01.10.2018
 * Description : Gère le système de filtres des stations
 */

var filters = document.querySelector('#filters');
var filtersGroup = document.querySelector('#filters .btn-group');
var filtersButtons = document.querySelectorAll('#filters .btn');

// On affiche les filtres si le JS est activé
filters.style.display = 'block';

// Ajout des fonctions filterStationsByLand et highlightSelectedFilter à tous les boutons de filtres (lors d'un clic)
filtersGroup.addEventListener('click', function(e) {
  if (e.target.tagName === 'BUTTON') {
    filterStationsByLand(e);
    highlightSelectedFilter(e)
  }
});

/**
 * Permet de filter les sections, donne un display non si on ne veut pas afficher l'élément et enlève la propriété display autrement
 * @param e, l'événement produit lors du clic
 */
function filterStationsByLand(e) {
  var landChosen = e.target.textContent.toLowerCase(); // canton choisi
  var allStations = document.querySelectorAll('.station');

  for (var i = 0; i < allStations.length; i++) {
    if (landChosen === 'toutes') {
      allStations[i].style.display = '';
    }
    else if (allStations[i].className.indexOf(landChosen) >= 0) { // on affiche si c'est le canton choisi
      allStations[i].style.display = '';
    }
    else { // sinon on display none
      allStations[i].style.display = 'none';
    }
  }
}

/**
 *  Permet de de donner la classe btn à tous les boutons et la classe btn--primary en plus au bouton qui a été cliqué
 * @param e, l'événement produit lors du clic
 */
function highlightSelectedFilter(e) {
  for (var i = 0; i < filtersButtons.length; i++) {
    filtersButtons[i].className = 'btn';
  }
  e.target.className = 'btn btn--primary';
}