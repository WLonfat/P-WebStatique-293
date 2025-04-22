/*
Auteur      : William.L
Version     : 1.0
Date        : 21.04.2025
Description : Script permettant de rajouter ou supprimer la classe active de menuBurger, pour pouvoir l'ouvrir ou le fermer via le CSS.
*/

var menuBurger = document.getElementById("menuBurger");
var buttonOuvrir = document.getElementById("buttonOuvrir");
var buttonFermer = document.getElementById("buttonFermer");

buttonOuvrir.onclick = ouvrirNav;
buttonFermer.onclick = fermerNav;

/* Set the width of the side navigation to 250px */
function ouvrirNav() {
    menuBurger.classList.add("active");
}

/* Set the width of the side navigation to 0 */
function fermerNav() {
    menuBurger.classList.remove("active");
}