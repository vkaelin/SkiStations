/**
 * ETML
 * Auteur : Valentin Kaelin
 * Date : 10.09.2018
 * Description : Gère le responsive du header
 */

// On attend que le contenu HTML de la page soit chargé avant de lancer ce script
document.addEventListener("DOMContentLoaded", function() {
  /*======================
          Header
  ======================*/
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
  
  /*======================
        Back-to-top 
  ======================*/
  var backToTop = document.querySelector('.back-to-top');

  window.addEventListener('scroll', function() {
    var scrollBarPosition = window.pageYOffset; // Position du scroll par rapport au haut de la page
    if (scrollBarPosition > 800) {
      backToTop.classList.add('back-to-top--display'); // On fait apparaître le back-to-top
    } else {
      backToTop.classList.remove('back-to-top--display'); // On enlève le back-to-top
    }
  });

  // Au scroll en haut de la page lors du clique
  backToTop.addEventListener('click', function() {
    // behavior smooth: rend fluide l'animation, block start : fait l'animation jusqu'au début de l'élément (ici élément html), inline nearest : valeur par défaut
    document.documentElement.scrollIntoView({behavior:"smooth", block: "start", inline: "nearest"});
  });
});
