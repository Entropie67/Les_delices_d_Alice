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
/*
for (let recette of recettes) {
    console.log(recette);
}
*/

for (let i = 0; i < 5; i++ ){
    console.log(recettes[i].ingredients[0]);
}

let card = (recette) => {
    let truc= "";
    // blabla
    return truc;
}

let section = document.querySelector("#recettes");
section.innerHTML = `<article class="card"><img
  class=""
  src="images/${recettes[0].image}"
  alt="" />
 <h3>${recettes[0].name}</h3> </article>`;