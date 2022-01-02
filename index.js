const hamburgerMenuInput = document.querySelector('.hamburger-menu__input');
  const hamburger = document.querySelector('.hamburger__menu');
  const headerNav = document.querySelector('.nav__list');
  hamburgerMenuInput.addEventListener("click", function(e) {
    if (hamburgerMenuInput.checked != false) {
      headerNav.classList.add('show');
    } else {
      headerNav.classList.remove('show');
    }
  });
  headerNav.addEventListener("click", function(e) {
    if (hamburgerMenuInput.checked != false) {
      hamburgerMenuInput.checked = false; 
      headerNav.classList.remove('show');
    } else {
      hamburgerMenuInput.checked = true; 
      headerNav.classList.add('show');
    }
  });
