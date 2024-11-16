import './styles.css';
import Home from './home.js';
import Menu from "./menu.js";
import About from "./about.js";

new Home(document.getElementById("content")).initializeDom();
const homeObj = new Home(document.getElementById("content"));
const menuObj = new Menu(document.getElementById("content"));
const aboutObj = new About(document.getElementById("content"));

document.querySelector(".menu-button").addEventListener("click", () => {
    document.getElementById("content").innerHTML = "";
    menuObj.initializeDom();
});
document.querySelector(".home-button").addEventListener("click", () => {
    document.getElementById("content").innerHTML = "";
    homeObj.initializeDom();
});
document.querySelector(".about-button").addEventListener("click", () => {
    document.getElementById("content").innerHTML = "";
    aboutObj.initializeDom();
});