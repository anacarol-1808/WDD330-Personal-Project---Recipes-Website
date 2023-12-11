// The home page should randomly load 3 different recipes to display
// extra api keys: d1f70067f78248078e71a58983a18e5f (indiano)
// db254b5cd61744d39a2deebd9c361444 (child)
// 320786665a194e83b2a064d5eab24ea6 (my key)
// 320786665a194e83b2a064d5eab24ea6 (gmail key)


document.addEventListener('DOMContentLoaded', function() {
    // Retrieve the id from localStorage
    const selectedRecipeId = localStorage.getItem('selectedRecipeId');
    const baseURL = `https://api.spoonacular.com/recipes/${selectedRecipeId}/information?apiKey=320786665a194e83b2a064d5eab24ea6`;
    let recipeData = '';

    // Check if the id is present
    if (selectedRecipeId) {
        async function getApiRecipeData() {
            const response = await fetch(baseURL);
            recipeData = await response.json();
            console.log(recipeData);
            renderRecipe(recipeData);
        }
        getApiRecipeData();

        function renderRecipe(recipeData){
        
            // Get the container element
            const recipeContainer = document.getElementById('recipeContainer');

            // Create HTML elements and insert data

            // Title
            
            const titleElement = document.createElement('h1');
            console.log(recipeData.title);
            titleElement.innerHTML = recipeData.title;
            console.log(titleElement);
            recipeContainer.appendChild(titleElement);

            // Sumary
            const summaryElement = document.createElement('p');
            summaryElement.innerHTML = recipeData.summary;
            recipeContainer.appendChild(summaryElement);

            // Image
            const imageElement = document.createElement('img');
            imageElement.src = recipeData.image;
            imageElement.alt = recipeData.title;
            recipeContainer.appendChild(imageElement);

            // Ingredients
            const ingredientsTitle = document.createElement('h2');
            ingredientsTitle.innerHTML = 'Ingredients';
            recipeContainer.appendChild(ingredientsTitle);
            const ingredientsElement = document.createElement('ul');
            recipeData.extendedIngredients.forEach(ingredient => {
                const listItem = document.createElement('li');
                listItem.innerHTML = `${ingredient.original}`;
                ingredientsElement.appendChild(listItem);
            });
            recipeContainer.appendChild(ingredientsElement);

            // Instructions
            if (recipeData.analyzedInstructions.length) {
                const instructionsTitle = document.createElement('h2');
                instructionsTitle.innerHTML = 'How to Prepare';
                recipeContainer.appendChild(instructionsTitle); 
            }
            
            const instructionsElement = document.createElement('ul');
            recipeData.analyzedInstructions[0].steps.forEach(step => {
                const stepItem = document.createElement('li');
                stepItem.innerHTML = `${step.number}. ${step.step}`;
                instructionsElement.appendChild(stepItem);
            })
            recipeContainer.appendChild(instructionsElement);
        }
           
    } else {
        console.warn('No selected recipe id found in localStorage.');
    }

});



