import './style.css';
import { loadMenu } from './menu.js';
import { loadHome } from './home.js'
import { loadAbout } from './about.js';
const homeButton = document.querySelector("#button-home")
const menuButton = document.querySelector("#button-menu")
const aboutButton = document.querySelector("#button-about")
loadHome()
homeButton.addEventListener('click', () => {

    loadHome()
});
menuButton.addEventListener('click', () => {
    loadMenu()
});
aboutButton.addEventListener('click', () => {
    loadAbout()
});
