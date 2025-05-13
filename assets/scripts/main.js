// main.js

// Run the init() function when the page has loaded
window.addEventListener("DOMContentLoaded", init);

// Starts the program, all function calls trace back here
function init() {
	// Get the recipes from localStorage
	let recipes = getRecipesFromStorage();
	// Add each recipe to the <main> element
	addRecipesToDocument(recipes);
	// Add the event listeners to the form elements
	initFormHandler();
}

/**
 * Reads 'recipes' from localStorage and returns an array of
 * all of the recipes found (parsed, not in string form). If
 * nothing is found in localStorage for 'recipes', an empty array
 * is returned.
 * @returns {Array<Object>} An array of recipes found in localStorage
 */
function getRecipesFromStorage() {
	// A9. Done - Complete the functionality as described in this function
	//           header. It is possible in only a single line, but should
	//           be no more than a few lines.
	return JSON.parse(localStorage.getItem('recipes'));
}

/**
 * Takes in an array of recipes and for each recipe creates a
 * new <recipe-card> element, adds the recipe data to that card
 * using element.data = {...}, and then appends that new recipe
 * to <main>
 * @param {Array<Object>} recipes An array of recipes
 */
function addRecipesToDocument(recipes) {
	// A10. Done - Get a reference to the <main> element
	const main_element = document.querySelector('main');
	// A11. Done - Loop through each of the recipes in the passed in array,
	//            create a <recipe-card> element for each one, and populate
	//            each <recipe-card> with that recipe data using element.data = ...
	//            Append each element to <main>
	for (const recipe of recipes) {
		const recipe_card_element = document.createElement('recipe-card');
		recipe_card_element.data = recipe;
		main_element.appendChild(recipe_card_element);
	}
}

/**
 * Takes in an array of recipes, converts it to a string, and then
 * saves that string to 'recipes' in localStorage
 * @param {Array<Object>} recipes An array of recipes
 */
function saveRecipesToStorage(recipes) {
	// EXPLORE - START (All explore numbers start with B)
	// B1. Done - Complete the functionality as described in this function
	//            header. It is possible in only a single line, but should
	//            be no more than a few lines.
	localStorage.setItem('recipes', JSON.stringify(recipes));
}

/**
 * Adds the necessary event handlers to <form> and the clear storage
 * <button>.
 */
function initFormHandler() {
	// B2. Done - Get a reference to the <form> element
	const form_element = document.querySelector('#new-recipe');
	// B3. Done - Add an event listener for the 'submit' event, which fires when the
	//            submit button is clicked
	form_element.addEventListener('submit', (e) => {
		e.preventDefault();
		// Steps B4-B9 will occur inside the event listener from step B3
		// B4. Done - Create a new FormData object from the <form> element reference above
		const form_data = new FormData(form_element);
		// B5. Done - Create an empty object (we'll refer to this object as recipeObject to
		//            make this easier to read), and then extract the keys and corresponding
		//            values from the FormData object and insert them into recipeObject
		const recipeObject = {};
		recipeObject.imgSrc = form_data.get('imgSrc'); 						// "string"
		recipeObject.imgAlt = form_data.get('imgAlt'); 						// "string"
		recipeObject.titleLnk = form_data.get('titleLnk');					// "string"
		recipeObject.titleTxt = form_data.get('titleTxt');					// "string"
		recipeObject.organization = form_data.get('organization');			// "string"
		recipeObject.rating = parseInt(form_data.get('rating'));			// number
		recipeObject.numRatings = parseInt(form_data.get('numRatings'));	// number
		recipeObject.lengthTime = form_data.get('lengthTime');				// "string"
		recipeObject.ingredients = form_data.get('ingredients');			// "string"
		// B6. Done - Create a new <recipe-card> element
		const recipe_card_element = document.createElement('recipe-card');
		// B7. Done - Add the recipeObject data to <recipe-card> using element.data
		recipe_card_element.data = recipeObject;
		// B8. TODO - Append this new <recipe-card> to <main>
		// B9. TODO - Get the recipes array from localStorage, add this new recipe to it, and
		//            then save the recipes array back to localStorage
	});
	// B10. TODO - Get a reference to the "Clear Local Storage" button
	// B11. TODO - Add a click event listener to clear local storage button
	// Steps B12 & B13 will occur inside the event listener from step B11
	// B12. TODO - Clear the local storage
	// B13. TODO - Delete the contents of <main>
}
