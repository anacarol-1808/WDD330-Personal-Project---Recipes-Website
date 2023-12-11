// The home page should load one main recipe related to the season
// extra api keys: d1f70067f78248078e71a58983a18e5f (indiano)
// db254b5cd61744d39a2deebd9c361444 (child)
// ebbf86dcedb34f56b0926b2a5bfd0541 (my key)


document.addEventListener('DOMContentLoaded', function() {
    let query = '';
    const mainCourseURL = `https://api.spoonacular.com/recipes/complexSearch?apiKey=db254b5cd61744d39a2deebd9c361444&query=${query}&type=main course&number=100`;
    const dessertURL = `https://api.spoonacular.com/recipes/complexSearch?apiKey=db254b5cd61744d39a2deebd9c361444&query=${query}&type=dessert&number=100`

    let mainCourseData = '';
    let dessertData = '';

    //Get the month of the Date Now (January is 0, December is 11)
    const d = new Date();
    let month = d.getMonth();
    console.log(month);
    let season = '';

    // assign each month to a season
    if (month == 11 || month == 0 || month == 1){
        season = 'Winter';
    }
    else if (month == 2 || month == 3 || month == 4){
        season = 'Spring';
    }
    else if (month == 5 || month == 6 || month == 7){
        season = 'Summer';
    }
    else if (month == 8 || month == 9 || month == 10){
        season = 'Fall';
    }

    
    if (season == 'Winter'){
        if (month == 11){
            query = 'christmas';
        }
        else {
            query = 'winter';
        }     
    }
    else if (season == 'Spring'){
        query = 'spring';
    }
    else if (season == 'Summer'){
        query = 'summer';
    }
    else if (season == 'Fall'){
        if (month == 10){
            query = 'thanksgiving'
        }
        else {
            query = 'fall';
        }
    }
    
    let type = '';

    async function getMainCourseData(query) {
        console.log(query);
        const response = await fetch(mainCourseURL);
        mainCourseData = await response.json();
        console.log(mainCourseData);
        let type = 'main';
        getRecipeID(mainCourseData, type);
    }

    async function getDessertData(query) {
        console.log(query);
        const response = await fetch(dessertURL);
        dessertData = await response.json();
        console.log(dessertData);
        let type = 'dessert';
        getRecipeID(dessertData, type);
    }

    getMainCourseData(query);
    getDessertData(query);
    

    function getRecipeID(data, type){
        let randomNumber = Math.floor(Math.random() * 100);
        let id = data.results[randomNumber].id;
        let recipeInfoURL = `https://api.spoonacular.com/recipes/${id}/information?apiKey=db254b5cd61744d39a2deebd9c361444`;
        getRecipeData(recipeInfoURL, type);
    }

    async function getRecipeData(url, type) {
        const response = await fetch(url);
        recipeData = await response.json();
        console.log(recipeData);
        choseContainer(recipeData, type);
    }

    function choseContainer(data, type){
        
        let containerName = '';
        
        if (type == 'main'){
            containerName =  'mainContainer-mainCourse';
            renderRecipe(data, containerName);
        }
        else if (type = 'dessert'){
            containerName = 'mainContainer-dessert';
            renderRecipe(data, containerName);
        }
    }

    function renderRecipe(data, containerName){
        // Get the container element
        recipeContainer = document.getElementById(containerName);
        // Create HTML elements and insert data

        // Title
        
        const titleElement = document.createElement('h1');
        console.log(data.title);
        titleElement.innerHTML = data.title;
        console.log(titleElement);
        recipeContainer.appendChild(titleElement);

        // Sumary
        const summaryElement = document.createElement('p');
        summaryElement.innerHTML = data.summary;
        recipeContainer.appendChild(summaryElement);

        // Image
        const imageElement = document.createElement('img');
        imageElement.src = data.image;
        imageElement.alt = data.title;
        recipeContainer.appendChild(imageElement);

        // Ingredients
        const ingredientsTitle = document.createElement('h2');
        ingredientsTitle.innerHTML = 'Ingredients';
        recipeContainer.appendChild(ingredientsTitle);
        const ingredientsElement = document.createElement('ul');
        data.extendedIngredients.forEach(ingredient => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `${ingredient.original}`;
            ingredientsElement.appendChild(listItem);
        });
        recipeContainer.appendChild(ingredientsElement);

        // Instructions
        if (data.analyzedInstructions.length) {
            const instructionsTitle = document.createElement('h2');
            instructionsTitle.innerHTML = 'How to Prepare';
            recipeContainer.appendChild(instructionsTitle); 
        }
        
        const instructionsElement = document.createElement('ul');
        data.analyzedInstructions[0].steps.forEach(step => {
            const stepItem = document.createElement('li');
            stepItem.innerHTML = `${step.number}. ${step.step}`;
            instructionsElement.appendChild(stepItem);
        })
        recipeContainer.appendChild(instructionsElement);
    }

});



