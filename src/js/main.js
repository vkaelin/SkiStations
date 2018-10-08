/**
 * ETML
 * Auteur : Valentin Kaelin
 * Date : 10.09.2018
 * Description : Gère le responsive du header
 */

// On attend que le contenu HTML de la page soit chargé avant de lancer ce script
document.addEventListener("DOMContentLoaded", function() {


  // Activer le header et la side-nav si le JS est activé
  var headerWithJS = document.querySelector('.header.activeWithJs');
  var sideNavWithJS = document.querySelector('.side-nav.activeWithJs');
  headerWithJS.style.display = 'flex';
  sideNavWithJS.style.display = 'block';

  // Eléments de la Navbar 
  var toggleHeader = document.querySelector('.toggle-mobile');
  var sideNav = document.querySelector('.side-nav');
  var sideNavOverlay = document.querySelector('.side-nav--overlay');

  // On translate/fait apparaître la side-nav lors du clique sur l'élément toggleHeader
  toggleHeader.addEventListener('click', function() {
    if (sideNav.style.transform === 'translateX(-100%)' || sideNav.style.transform === '') { // Si la side-nav est fermée, on l'ouvre
      sideNav.style.transform = 'translateX(0px)';
      sideNavOverlay.style.display = 'block';
    } else {  // Si la side-nav est ouverte, on la ferme
      closeSideNav();
    }
  });

  // On ferme également la side-nav lors d'un click sur l'overlay de la side-nav
  sideNavOverlay.addEventListener('click', closeSideNav);
  sideNavOverlay.addEventListener('touchmove', closeSideNav); // L'événement "touchmove" permet de fermer la side-nav au moindre touché sur mobile

  /**
   * Permet de fermer la side-nav, en lui faisant une translation et en mettant un display none à l'overlay
   */
  function closeSideNav() {
    sideNav.style.transform = 'translateX(-100%)';
    sideNavOverlay.style.display = 'none';
  }

});
