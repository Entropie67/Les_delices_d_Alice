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
let section = document.querySelector("#recettes");

for (let i = 0 ; i < 5 ; i++){
    console.log(recettes[i].name);
    /* Rajouter des choses dans la partie suivante */
    section.innerHTML += `<article class="card">
                            <img src="images/${recettes[i].image}"/>
                            <h3>${recettes[i].name}</h3>
                            <p>blabla</p>
                            <h4>RECETTE</h4>
                            <h4>Ingrédients</h4>
                            
                            
                       
                          </article>`;
}

for (let recette of recettes){
    console.log(recette.name);
}

section.innerHTML += "<p> Ma recette </p>"