var siteNav = document.querySelector('.site-navigation');
var navButton = document.querySelector('#menu-button');

function navSizer() {
  if(window.innerWidth < 840) {
    siteNav.classList.add('site-navigation-hidden');
    siteNav.classList.remove('site-navigation-open');
  } else {
    siteNav.classList.remove('site-navigation-hidden');
  }
}

function navButtonToggle() {
  if(siteNav.classList.contains('site-navigation-open')) {
    siteNav.classList.remove('site-navigation-open');
  } else {
    siteNav.classList.add('site-navigation-open');
  }
}

navButton.addEventListener('click', navButtonToggle);
window.addEventListener('resize', navSizer);
navSizer();
