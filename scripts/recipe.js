// The home page should randomly load 3 different recipes to display
// extra api keys: d1f70067f78248078e71a58983a18e5f (indiano)
// db254b5cd61744d39a2deebd9c361444 (child)
// ebbf86dcedb34f56b0926b2a5bfd0541 (my key)


document.addEventListener('DOMContentLoaded', function() {
    // Retrieve the id from localStorage
    const selectedRecipeId = localStorage.getItem('selectedRecipeId');
    console.log('This is the recipe ID: ' + selectedRecipeId)
    const baseURL = `https://api.spoonacular.com/recipes/${selectedRecipeId}/information?apiKey=db254b5cd61744d39a2deebd9c361444`;
    
    // Check if the id is present
    if (selectedRecipeId) {
        async function getApiDataRecipe() {
            const response = await fetch(baseURL);
            dataRecipe = await response.json();
            console.log(dataRecipe);
        }
        getApiDataRecipe();
        // Clear the stored id from localStorage (optional)
        
    } else {
        console.warn('No selected recipe id found in localStorage.');
    }
    localStorage.removeItem('selectedRecipeId');

});






// document.addEventListener('DOMContentLoaded', function () {
//     const apiUrl = 'https://api.spoonacular.com/recipes/638308/information?apiKey=db254b5cd61744d39a2deebd9c361444';

//     // Fetch data from the API
//     fetch(apiUrl)
//         .then(response => response.json())
//         .then(recipeData => {
//             // Get the container element
//             const recipeContainer = document.getElementById('recipe-container');

//             // Create HTML elements and insert data
//             const titleElement = document.createElement('h1');
//             titleElement.textContent = recipeData.title;
//             recipeContainer.appendChild(titleElement);

//             const imageElement = document.createElement('img');
//             imageElement.src = recipeData.image;
//             imageElement.alt = recipeData.title;
//             recipeContainer.appendChild(imageElement);

//             // Add more elements as needed (ingredients, instructions, etc.)
//             // Example:
//             const ingredientsElement = document.createElement('ul');
//             recipeData.extendedIngredients.forEach(ingredient => {
//                 const listItem = document.createElement('li');
//                 listItem.textContent = `${ingredient.amount} ${ingredient.unit} ${ingredient.name}`;
//                 ingredientsElement.appendChild(listItem);
//             });
//             recipeContainer.appendChild(ingredientsElement);

//             // Add other recipe information...
//         })
//         .catch(error => console.error('Error fetching data:', error));
// });

