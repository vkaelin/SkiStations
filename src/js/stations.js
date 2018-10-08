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

// Ajout de la fonction filterStationsByLand à tous les boutons de filtres
filtersGroup.addEventListener('click', function(e) {
  if (e.target.tagName == 'BUTTON') {
    filterStationsByLand(e);
    highlightSelectedFilter(e)
  }
}, false);


// filterStationsByLand function
function filterStationsByLand(e) {
  var landChosen = e.target.textContent.toLowerCase();
  var allStations = document.querySelectorAll('.station');

  for (var i = 0; i < allStations.length; i++) {
    if (landChosen == 'toutes') {
      allStations[i].style.display = '';
    }
    else if (allStations[i].className.indexOf(landChosen) >= 0) {
      allStations[i].style.display = '';
    }
    else {
      allStations[i].style.display = 'none';
    }
  }
}


// highlightSelectedFilter function
function highlightSelectedFilter(e) {
  for (var i = 0; i < filtersButtons.length; i++) {
    filtersButtons[i].className = 'btn';
  }
  e.target.className = 'btn btn--primary';
}
