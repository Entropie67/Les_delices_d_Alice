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
    section.innerHTML += `<article class="card">
                            <img src="images/${recette.image}"/>
                            <h3>${recette.name}</h3>
                            <p>blabla</p>
                            <h4>RECETTE</h4>
                            <h4>Ingrédients</h4>
                            
                            
                       
                          </article>`;
}

// On appelle la fonction creatCard sur chaque recette
for (let recette of recettes){
    createCard(recette);
}

