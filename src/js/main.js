document.addEventListener("DOMContentLoaded", function() {

  const toggleHeader = document.querySelector('.toggle-mobile');
  const sideNav = document.querySelector('.side-nav');
  const sideNavOverlay = document.querySelector('.side-nav--overlay');

  toggleHeader.addEventListener('click', () => {
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
