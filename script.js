

fetch("http://localhost:3000/drinks")
.then(res => res.json())
.then(data => addCocktailsToBar(data));

// PICTURES UP, 1ST EVENT LISTENER (CLICK)

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



// ADDS NEW COCKTAIL TO RECIPE LIST, 2ND EVENT LISTENER(SUBMIT)

const newCocktailForm = document.querySelector("#new-cocktail");
newCocktailForm.addEventListener("submit", makeNewCocktail);
function makeNewCocktail(event) {
    const base = [...event.target.querySelectorAll('.base-box input[type=checkbox]:checked')].map(i => i.value)
    const liqueurs = [...event.target.querySelectorAll('.liqueurs-box input[type=checkbox]:checked')].map(i => i.value)
    const ingredients = [...event.target.querySelectorAll('.ingredients-box input[type=checkbox]:checked')].map(i => i.value)
    const extras = [...event.target.querySelectorAll('.extras-box input[type=checkbox]:checked')].map(i => i.value)
    const citrus = [...event.target.querySelectorAll('.citrus-box input[type=checkbox]:checked')].map(i => i.value)
    event.preventDefault();
    const newCocktail = {
        name: event.target.name.value,
        base: base,
        liqueurs: liqueurs,
        ingredients: ingredients,
        extras: extras,
        citrus: citrus,
        image: event.target.image.value,
    
    }
    event.target.reset()
    console.log(newCocktail)
addCocktailToBar(newCocktail)

}

//TOGGLE BOTH FORMS

const toggleCocktailFormButton = document.querySelector('#toggleCocktailForm');
const cocktailForm = document.querySelector('#new-cocktail')
let cocktailFormVisible = false;

function toggleCocktailForm() {
  if (cocktailFormVisible) {
hideCocktailForm();
  } else {
    showCocktailForm();
  }
}

function showCocktailForm() {
    cocktailFormVisible = true;
    cocktailForm.classList.remove('collapsed');
    toggleCocktailFormButton.textContent = "Hide cocktail form";
}

function hideCocktailForm() {
    cocktailFormVisible = false;
    cocktailForm.classList.add('collapsed');
    toggleCocktailFormButton.textContent = "New Cocktail";
}


toggleCocktailFormButton.addEventListener('click', toggleCocktailForm);


const toggleMyOptionsButton = document.querySelector('#toggleMyOptionsForm');
const myOptionsForm = document.querySelector('#my-options-form')
let myOptionsFormVisible = false;

function toggleMyOptionsForm() {
  if (myOptionsFormVisible) {
hideMyOptionsForm();
  } else {
    showMyOptionsForm();
  }
}


function showMyOptionsForm() {
    myOptionsFormVisible = true;
    myOptionsForm.classList.remove('collapsed');
    toggleMyOptionsButton.textContent = "Hide my options form";
}

function hideMyOptionsForm() {
    myOptionsFormVisible = false;
    myOptionsForm.classList.add('collapsed');
    toggleMyOptionsButton.textContent = "New Search";
}


toggleMyOptionsButton.addEventListener('click', toggleMyOptionsForm);


window.addEventListener('keydown', (e) => {
  console.log(e);
  console.log(e.key);
  if (e.key === "32") {
    if (cocktailFormVisible) {
      toggleCocktailForm();
    }
    if (myOptionsFormVisible) {
      toggleMyOptionsForm();
    }
  }

})