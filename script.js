// try #1

fetch("http://localhost:3000/drinks")
.then(res => res.json())
.then(data => addCocktailsToBar(data));

const savedRecipes = document.getElementById("saved-recipes")
const addCocktailToBar = drink => {
    const drinkImage = document.createElement("img");
    drinkImage.src = drink.image
    savedRecipes.append(drinkImage)
    //working pictures on the page
    drinkImage.addEventListener("click", (event) => {renderDetails(drink)});
    // drinkImage.addEventListener("click", (event) =>
    //     drinkImage.target.classList.toggle() 
}
const addCocktailsToBar = drinks => {
    console.log(drinks)
    drinks.forEach(addCocktailToBar)
}

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




// Add cocktail to top menu
const newCocktailForm = document.querySelector("#new-cocktail");
newCocktailForm.addEventListener("submit", makeNewCocktail);

function makeNewCocktail(event) {
    event.preventDefault();
    const newCocktail = {
        name: event.target.name.value,
        base: event.target.base,
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
//     if (document.getElementsByClassName("checkbox1","checkbox2").checked == true) {
//         console.log('checked')
//     } else {
//         console.log('false')
//     }
// }