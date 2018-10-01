/**
 * ETML
 * Auteur : Valentin Kaelin
 * Date : 01.10.2018
 * Description : Gère le système de filtres des stations
 */
var filtersGroup = document.querySelector('#filters .btn-group');
var filtersButtons = document.querySelectorAll('#filters .btn');


// bind the filterStationsByLand function to the group of buttons
filtersGroup.addEventListener('click', (e) => {
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
    else if (allStations[i].className.includes(landChosen)) {
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
