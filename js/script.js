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

//fillLocalStorage();

// Affichage du tableau de produits
function displayProducts() {
    let listeProduits = JSON.parse(localStorage.getItem('listeProduits')) || [];

    if (listeProduits.length > 0) {
        const bodyTableau = document.getElementById("products");
        bodyTableau.innerHTML = '';

        listeProduits.forEach(element => {

            // Création de la ligne du tableau avec les données du produit
            const tableRow = document.createElement('tr');

            const tdName = document.createElement('td'); // Création de la cellule pour le nom du produit
            tdName.classList.add('w-100');
            tdName.textContent = element.name;

            const tdPrice = document.createElement('td'); // Création de la cellule pour le prix du produit
            tdPrice.textContent = element.price;

            const tdStock = document.createElement('td'); // Création de la cellule pour le stock du produit
            tdStock.classList.add('stock');
            tdStock.textContent = element.stock;

            const tdButtonAddMinus = document.createElement('td'); // Création de la cellule pour les boutons d'ajout et de suppression
            tdButtonAddMinus.classList.add('text-nowrap');

            const buttonMinus = document.createElement('button'); // Création du bouton de soustraction
            buttonMinus.classList.add('btn', 'btn-primary', 'btn-sm', 'stock-add');
            buttonMinus.innerHTML = '&minus;';
            buttonMinus.addEventListener('click', function () {
                console.log('retrait');
            });

            const buttonAdd = document.createElement('button'); // Création du bouton d'ajout
            buttonAdd.classList.add('btn', 'btn-outline-primary', 'btn-sm', 'stock-del');
            buttonAdd.innerHTML = '&plus;';
            buttonAdd.addEventListener('click', function () {
                console.log('ajout');
            });

            tdButtonAddMinus.append(buttonMinus, buttonAdd); // Ajout des boutons dans la cellule

            const tdDelete = document.createElement('td'); // Création de la cellule pour le bouton de suppression
            const buttonDelete = document.createElement('button');
            buttonDelete.classList.add('btn', 'btn-danger', 'btn-sm', 'product-del');
            buttonDelete.innerHTML = '&Cross;';
            buttonDelete.addEventListener('click', function () {
                if (window.confirm('Voulez-vous vraiment supprimer ce produit ?')) {
                    element.remove();
                }
            });

            tdDelete.append(buttonDelete);

            tableRow.append(tdName, tdPrice, tdStock, tdButtonAddMinus, tdDelete);
            bodyTableau.append(tableRow);
        });
    }
}

// DOMContentLoaded
document.addEventListener('DOMContentLoaded', function () {
    console.log('%c🚀', 'font-size:180px');
    // Votre code ici !

    // Récupération de la liste des produits dans le localStorage sinon un tableau vide
    let listeProduits = JSON.parse(localStorage.getItem('listeProduits')) || [];

    const divAlert = document.getElementById('alert');
    // Gère l'affichage du message d'alerte si le stock est vide ou non
    if (listeProduits.length <= 0) {
        divAlert.style.display = 'block';
    } else {
        divAlert.style.display = 'none';
    }

    const formulaire = document.getElementById("ajoutForm");
    const inputName = document.getElementById("add-name");
    const inputPrice = document.getElementById("add-price");
    const inputStock = document.getElementById("add-stock");

    formulaire.addEventListener('submit', (e) => {
        e.preventDefault();

        if (!inputName.value || !inputPrice.value || !inputStock.value) {
            alert("Veuillez remplir tous les champs");
            return;
        }

        const produit = {
            name: inputName.value,
            price: parseFloat(inputPrice.value),
            stock: parseInt(inputStock.value)
        };

        listeProduits.push(produit);
        localStorage.setItem("listeProduits", JSON.stringify(listeProduits));
        displayProducts();
    });

    // Affichage des produits si le stock n'est pas vide
    displayProducts();
});