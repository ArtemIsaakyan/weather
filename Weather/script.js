var burger = document.querySelector('.header-burger');
var menu = document.querySelector('.header-menu');
var body = document.querySelector('.body');
burger.addEventListener('click', function () {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
    body.classList.toggle('lock');
})