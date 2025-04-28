/*
Auteur      : William.L
Version     : 2.0
Date        : 23.04.2025
Description : Scripts du site Lonfdrone
*/


/* Fonctions permettant de rajouter ou supprimer la classe active de menuBurger, pour pouvoir l'ouvrir ou le fermer via le CSS.*/

/* Ajout de la classe active à menuBurger */
function ouvrirNav() {
    menuBurger.classList.add("active");
}

/* Retire la classe active à menuBurger */
function fermerNav() {
    menuBurger.classList.remove("active");
}

/* Fonction pour vérifier les conditions du formulaire de contact*/

    function Message() {

        const verificationOk = document.getElementById('condition').checked

        if (verificationOk) {

            document.getElementById("reponse").innerHTML = "Le formulaire a bien été envoyé.";
            return false;
        }

    }