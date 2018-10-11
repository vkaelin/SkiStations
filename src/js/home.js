/**
 * ETML
 * Auteur : Valentin Kaelin
 * Date : 01.10.2018
 * Description : Modifie le bouton du formulaire du masthead en fonction de la taille de l'écran
 */

// On attend que le contenu HTML de la page soit chargé avant de lancer ce script
document.addEventListener("DOMContentLoaded", function() {

  // Bouton recherche dans le masthead
  const searchBtnMasthead = document.querySelector('.masthead .input-row .btn');

  // On appelle la fonction changeBtnMasthead() au chargement de la page et à chaque fois que la taille de la page est redéfinie
  changeBtnMasthead();
  window.addEventListener('resize', function() {
    changeBtnMasthead();
  });

  
  /**
   * Change le contenu du bouton du masthead en fonction de la taille actuelle de la fenêtre
   */
  function changeBtnMasthead() {
    searchBtnMasthead.innerHTML = (window.innerWidth < 400 ? '<i class="fas fa-search"></i>' : 'Rechercher');
  }
});