/**
 * ETML
 * Auteur : Valentin Kaelin
 * Date : 01.10.2018
 * Description : Modifie le bouton du formulaire du masthead en fonction de la taille de l'écran
 */

document.addEventListener("DOMContentLoaded", function() {

  /* Search in masthead */
  const searchBtnMasthead = document.querySelector('.masthead .input-row .btn');

  changeBtnMasthead();
  window.addEventListener('resize', function() {
    changeBtnMasthead();
  });

  function changeBtnMasthead() {
    searchBtnMasthead.innerHTML = (window.innerWidth < 400 ? '<i class="fas fa-search"></i>' : 'Rechercher');
  }
});