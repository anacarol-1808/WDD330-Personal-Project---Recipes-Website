// d1f70067f78248078e71a58983a18e5f (indiano)
// db254b5cd61744d39a2deebd9c361444 (child)
// ebbf86dcedb34f56b0926b2a5bfd0541 (my key)
// 320786665a194e83b2a064d5eab24ea6 (gmail key)
// efefa91814cb4d3a92ea12c310f20072 (gui)
// 90cc90ac2d314d10b1f9d3cf850cd540 (mafo) 
// 0461f9f6ce4c4b5297e8c6394e5309fa (mafran) -- using this one
// 896979189fea41dfa19af91f1e970c01 (sabrine)
// 40a9caa5188547d2a29f1a25a33f0b79 (thomas)


document.addEventListener('DOMContentLoaded', function() {
    // Retrieve the id from localStorage
    const selectedRecipeId = localStorage.getItem('selectedRecipeId');
    const baseURL = `https://api.spoonacular.com/recipes/${selectedRecipeId}/information?320786665a194e83b2a064d5eab24ea6`;
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



