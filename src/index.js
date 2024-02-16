import './style.css';
import { loadMenu } from './menu.js';
import { loadHome } from './home.js'
import { loadAbout } from './about.js';
const homeButton = document.querySelector("#button-home")
console.log(homeButton)
const menuButton = document.querySelector("#button-menu")
console.log(menuButton)
const aboutButton = document.querySelector("#button-about")
console.log(aboutButton)

console.log(content)
homeButton.addEventListener('click', () => {

    loadHome()
});
menuButton.addEventListener('click', () => {
    loadMenu()
});
aboutButton.addEventListener('click', () => {
    loadAbout()
});
