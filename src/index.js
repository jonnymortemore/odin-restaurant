import "./styles.css";
import {generateHomePage, generateAboutPage, generateMenuPage} from "./pageFunctions.js";

console.log("Running!");

generateHomePage();

document.querySelector(".home").addEventListener("click", () => {
    generateHomePage();
});

document.querySelector(".about").addEventListener("click", () => {
    generateAboutPage();
});

document.querySelector(".menu").addEventListener("click", () => {
    generateMenuPage();
})