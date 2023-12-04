console.log("*****************************CONSOLE************************************");
// L'ensemble des recettes se trouve dans cette variable recette
const recettes = recipes;
// Affichage de la première recette dans la console du navigateur :
console.log("Première recette : ", recettes[0]);
// Bien observer la structure, le JSON en JS ressemble beaucoup aux dictionnaires Python,
// Par exemple pour obtenir le tableau (encore !) des ingrédients de la recette 1 :
console.log("Ingrédients de la première recette : ", recettes[0]["ingredients"]);
// Le premier de ces ingrédients :
console.log("Premier ingrédient, de la première recette : ", recettes[0]["ingredients"][0]);
console.log("Premier ingrédient, de la première recette : ", recettes[0]["ingredients"][0].ingredient);
// en JS on peut soit faire ["ingredient"], comme en Python, ou faire .ingredient
console.log("*******************************************************************");
// A vous de jouer !!
/****************************************************************************************************/
// On commence par réccupérer la section dans laquelle on va afficher les recettes.
let section = document.querySelector("#recettes");

/* Création d'une fonction qui prend en entrée une seule RECETTE et qui ajoute au HTML
le card de cette recette.
 */
let createCard = (recette) => {
    let chaine = `<article class="card">
                            <img src="images/${recette.image}"/>
                            <h3>${recette.name}</h3>
                            
                            <h4>RECETTE</h4>
                            <p>${recette['description']}</p>
                            <h4>Ingrédients</h4>
                             <div class="ingredients">`;
    for (let ingredient of recette.ingredients){
        chaine += `<div class="ingredient">
                        <h5>${ingredient.ingredient}</h5>
                        <p>${ingredient.quantity}`;
        if (ingredient.unit){
            chaine += `${ingredient.unit}`
        }
        chaine += `</p></div>`;
    }
    chaine += `</div></article>`;
    section.innerHTML += chaine;
}
/************************************************************/
/* Fonction qui affiche les cartes d'une liste de recettes. */
/************************************************************/
let affichageRecettes = (liste) => {
    for (let recette of liste){
        createCard(recette);
    }
}

affichageRecettes(recettes);

/************************************************************/
/*                          Filtres                          */
/************************************************************/

let filtreIngredient = (mot) => {
    let liste;
    console.log("Recherche sur le mot : ", mot);
    return liste;
}