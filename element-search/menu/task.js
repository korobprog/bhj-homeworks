let menuLink = Array.from(document.getElementsByClassName('menu__link'));

menuLink.forEach(i => i.addEventListener('click', function (evt) {
  closeALLsunMenu();
  if ((i.parentElement.getElementsByClassName('menu_sub')).length === 1) {
    evt.preventDefault();
    let menuSub = Array.from(i.parentElement.getElementsByClassName('menu_sub'));
    console.log(menuSub)
    menuSub.forEach(sub => sub.classList.toggle('menu_active'));
  }
}));

function closeALLsunMenu() {
  const subMenu = document.querySelectorAll('.menu_sub');
  console.log(subMenu)
  Array.from(subMenu).forEach(i => i.classList.remove('menu_active'));
}

document.querySelector('.menu_main').onmouseleave = closeALLsunMenu;