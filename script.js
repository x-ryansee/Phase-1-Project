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
    const drinkIngredients = document.querySelector("#drink-ingredients");
    drinkIngredients.textContent = drink.ingredients
}
const toggleBookFormButton = document.querySelector('#toggleBookForm');
let bookFormVisible = false;



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
addCocktailToBar(newCocktail)
}