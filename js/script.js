// Modèle de données produits
const produits1 = {
    name: 'Tartiflette à réaction',
    price: 599.99,
    stock: 26
};

const produits2 = {
    name: 'Hélicoptère à pédales',
    price: 250.95,
    stock: 12
};

const produits3 = {
    name: 'Géranium électrique',
    price: 398.57,
    stock: 178
}

const products = [produits1, produits2, produits3];

// méthode pour remplir le localStorage
function fillLocalStorage() {
    localStorage.setItem('listeProduits', JSON.stringify(products));
}

fillLocalStorage();

// DOMContentLoaded
document.addEventListener('DOMContentLoaded', function () {
    console.log('%c🚀', 'font-size:180px');
    // Votre code ici !

    const divAlert = document.getElementById('alert');

    // Récupération de la liste des produits dans le localStorage sinon un tableau vide
    let listeProduits = JSON.parse(localStorage.getItem('listeProduits')) || [];

    // Gère l'affichage du message d'alerte si le stock est vide ou non
    if (listeProduits.length <= 0) {
        divAlert.style.display = 'block';
    } else {
        divAlert.style.display = 'none';
    }


});