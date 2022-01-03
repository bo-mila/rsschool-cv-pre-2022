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
console.log(
  `
  Балл за задание +130:
  - CV задеплоенное на gh-pages +10;
  - вёрстка валидная +10 (проверено  сервисом https://validator.w3.org/);
  - вёрстка семантическая +20:
      header, main, footer +5
      элемент nav +5
      только один заголовок h1 +5
      заголовки h2 +5
  - в footer есть ссылка на гитхаб, год создания приложения, логотип курса со ссылкой на курс +10;
  - для оформления СV используются css-стили +10;
  - при уменьшении масштаба страницы браузера вёрстка размещается по центру по горизонтали, а не сдвигается в сторону +10;
  - на странице СV есть фото автора, пропорции изображения не искажены, у изображения есть атрибут alt +10;
  - навигация, контакты для связи и перечень навыков оформлены в виде списка ul > li или ul > li > a +10;
  - Содержание CV +30:
      краткая информация о себе +5
      контакты для связи +5
      перечень навыков +5
      пример кода, код добавляется при помощи символов и тегов, а не картинкой +5
      перечень выполненных проектов со ссылками на исходный код или страницу приложения +5
      информацию об образовании и уровне английского +5
  - CV выполнено на английском языке +10.

  Заранее благодарю за честную оценку :)
  `
);