/*
Auteur      : William.L
Version     : 2.0
Date        : 22.04.2025
Description : Scripts du site Lonfdrone
*/

/* Script permettant de rajouter ou supprimer la classe active de menuBurger, pour pouvoir l'ouvrir ou le fermer via le CSS.*/

    var menuBurger = document.getElementById("menuBurger");
    var buttonOuvrir = document.getElementById("buttonOuvrir");
    var buttonFermer = document.getElementById("buttonFermer");

    buttonOuvrir.onclick = ouvrirNav;
    buttonFermer.onclick = fermerNav;

    /* Fonction pour ajouter la classe active à menuBurger. (Aligné à 0px à droite)*/
    function ouvrirNav() {
        menuBurger.classList.add("active");
    }

    /* Fonction pour retirer la classe active à menuBurger. (Aligné à -255px à droite)*/
    function fermerNav() {
        menuBurger.classList.remove("active");
    }

/* Fonction pour vérifier les conditions du formulaire de contact*/

    function Message() {

        const verification = document.getElementById('condition').checked

        if (verification) {
        document.getElementById("reponse").innerHTML = "Votre formulaire a bien été envoyé.";
        return false;
        }

    }