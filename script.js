// try #1

fetch("http://localhost:3000/drinks")
.then(res => res.json())
.then(data => addCocktailsToBar(data));

// PICTURES SHOW UP, 1ST EVENT LISTENER (CLICK)

const savedRecipes = document.getElementById("saved-recipes")
const addCocktailToBar = drink => {
    const drinkImage = document.createElement("img");
    drinkImage.src = drink.image
    savedRecipes.append(drinkImage)
    drinkImage.addEventListener("click", (event) => {renderDetails(drink)});
    // drinkImage.addEventListener("click", (event) => {makeImageBold(drink)});
}
const addCocktailsToBar = drinks => {
    drinks.forEach(addCocktailToBar)
}






// WHEN PICTURE IS CLICKED, INGREDIENTS SHOW UP

function renderDetails(drink) {
    const drinkName = document.querySelector("#drink-name");
    drinkName.textContent = drink.name
    const drinkBase = document.querySelector("#drink-base");
    drinkBase.textContent = drink.base
    const drinkLiqueurs = document.querySelector("#drink-liqueurs");
    drinkLiqueurs.textContent = drink.liqueurs
    const drinkIngredients = document.querySelector("#drink-ingredients");
    drinkIngredients.textContent = drink.ingredients
    const drinkExtras = document.querySelector("#drink-extras");
    drinkExtras.textContent = drink.extras
    const drinkCitrus = document.querySelector("#drink-citrus");
    drinkCitrus.textContent = drink.citrus
}







// ALLOWS CHECKBOXES TO LOG, 2ND EVENT LISTENER(CHANGE)

const baseBox = document.getElementsByClassName("base-box")[0];
const inputs = baseBox.getElementsByTagName("input");

for (const input of inputs) {
  input.addEventListener("change", () => logValues());
}

function logValues() {
  const output = [];
  for (const input of inputs) {
    output.push([input.value, input.checked]);
  }
  console.log(output);
}





// ADDS NEW COCTAIL TO RECIPE LIST, 3RD EVENT LISTENER(SUBMIT)

const newCocktailForm = document.querySelector("#new-cocktail");
newCocktailForm.addEventListener("submit", makeNewCocktail);

function makeNewCocktail(event) {
    event.preventDefault();
    const newCocktail = {
        name: event.target.name.value,
        base: event.target.input.value,
        liqueurs: event.target.liqueurs,
        ingredients: event.target.ingredients,
        extras: event.target.extras,
        citrus: event.target.citrus,
        image: event.target.image.value,
        // comment: event.target.comment.value,
    
    }
    console.log(newCocktail)
addCocktailToBar(newCocktail)
}

//TOGGLE FORM NOT WORKING

const toggleCocktailFormButton = document.querySelector('#toggleCocktailForm');
let cocktailFormVisible = false;

function toggleCocktailForm() {
  const form = document.querySelector('#new-cocktail')
  form.classList.toggle('collapsed')
  if (form.classList.contains('collapsed')) {
    cocktailFormVisible = false;
    toggleCocktailFormButton.textContent = "New Cocktail";
  } else {
    cocktailFormVisible = true;
    toggleCocktailFormButton.textContent = "Hide Cocktail Form";
  }
}

toggleCocktailFormButton.addEventListener('click', toggleCocktailForm);



//how to grab the names from the DOM and use them in Javascript

//console log to test stuff
//RENDER INGREDIENTS SELECTED
// function myIngredients() {
//     if (document.getElementsByClassName("checkbox1", [0]).checked == true) {
//         console.log('checked')
//     } else {
//         console.log('false')
//     }
// }