const burger = document.getElementById('burger');
const burger_menu = document.getElementById('burger-menu');

if ((burger) && (burger_menu)){
    burger.addEventListener('click', () => {
        burger_menu.classList.toggle('open');
        burger.textContent = (burger.textContent === '☰') ? '✕' : '☰';
    });
    burger_menu.addEventListener('click', () => {
        burger_menu.classList.toggle('open');
        burger.textContent = (burger.textContent === '☰') ? '✕' : '☰';
    });
}
window.addEventListener('DOMContentLoaded', () => {
    const reveal_dy_items = document.querySelectorAll('.reveal_dy'); 
    const reveal_items = document.querySelectorAll('.reveal'); 
    reveal_dy_items.forEach(item => item.classList.add('active'));
    reveal_items.forEach(item => item.classList.add('active'));

});
