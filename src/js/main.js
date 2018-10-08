/**
 * ETML
 * Auteur : Valentin Kaelin
 * Date : 10.09.2018
 * Description : Gère le responsive du header
 */

document.addEventListener("DOMContentLoaded", function() {


  /* Activer le header et la side-nav si le JS est activé */
  var headerWithJS = document.querySelector('.header.activeWithJs');
  var sideNavWithJS = document.querySelector('.side-nav.activeWithJs');

  headerWithJS.style.display = 'flex';
  sideNavWithJS.style.display = 'block';

  /* Navbar */
  var toggleHeader = document.querySelector('.toggle-mobile');
  var sideNav = document.querySelector('.side-nav');
  var sideNavOverlay = document.querySelector('.side-nav--overlay');

  toggleHeader.addEventListener('click', function() {
    if (sideNav.style.transform === 'translateX(-100%)' || sideNav.style.transform === '') { // Si fermé, on ouvre
      sideNav.style.transform = 'translateX(0px)';
      sideNavOverlay.style.display = 'block';
    } else {  // Si ouvert, on ferme
      closeSideNav();
    }
  });

  sideNavOverlay.addEventListener('click', closeSideNav);
  sideNavOverlay.addEventListener('touchmove', closeSideNav);

  function closeSideNav() {
    sideNav.style.transform = 'translateX(-100%)';
    sideNavOverlay.style.display = 'none';
  }

});
