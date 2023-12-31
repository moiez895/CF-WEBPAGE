const burger = document.querySelector('.burger');
const NavBar = document.querySelector('.NavBar');
const NavList = document.querySelector('.NavList');
const Rightnav = document.querySelector('.Rightnav');

burger.addEventListener('click', () => {
    Rightnav.classList.toggle('v-class-resp');
    NavList.classList.toggle('v-class-resp');
    NavBar.classList.toggle('h-nav-resp');
});