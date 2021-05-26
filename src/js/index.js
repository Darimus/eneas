/* BtnMenu */
/* $ para toda variavel que guarda uma referencia do HTML, para facilitar a leitura */
const $menu = document.querySelector('.menu');
const $btnMenuOpen = document.querySelector('.btnMenu_open');
const $btnMenuClose = document.querySelector('.btnMenu_close');


$btnMenuOpen.addEventListener('click', () => {
    $menu.classList.add('menu_open');
})

$btnMenuClose.addEventListener('click', () => {
    $menu.classList.remove('menu_open');
})