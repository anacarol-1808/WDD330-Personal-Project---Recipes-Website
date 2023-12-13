// d1f70067f78248078e71a58983a18e5f (indiano)
// db254b5cd61744d39a2deebd9c361444 (child)
// ebbf86dcedb34f56b0926b2a5bfd0541 (my key)
// 320786665a194e83b2a064d5eab24ea6 (gmail key)
// efefa91814cb4d3a92ea12c310f20072 (gui)
// 90cc90ac2d314d10b1f9d3cf850cd540 (mafo)
// 0461f9f6ce4c4b5297e8c6394e5309fa (mafran) -- using this one

let query = '';

function getQueryValue() {
  query = document.getElementById("myText").value;
  console.log(query);
  getApiRecipeData(query);
}

function getApiRecipeData(query){

  const apiUrl = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=0461f9f6ce4c4b5297e8c6394e5309fa&ingredients=${query}&number=500`;
  // Make a GET request to the API
  fetch(apiUrl)
  .then(response => {
    // Check if the request was successful (status code 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parse the JSON in the response
    return response.json();
  })
  .then(data => {
    // Log the data to the console
    console.log(data);
    displayRecipesList(data);
  })
  .catch(error => {
    // Log any errors that occurred during the fetch
    console.error('Fetch error:', error);
  });
}


function displayRecipesList (data) {
  const recipeContainer = document.querySelector('.grid-food');
  recipeContainer.innerHTML = '';

  data.forEach(recipe => {
    
    // anchor
    let anchor = document.createElement('a');

    //title
    let titleContent = document.createElement('h2');
    titleContent.innerHTML = recipe.title;

    //image
    let imageContent = document.createElement('img');
    imageContent.src = recipe.image;
    imageContent.alt = recipe.title;
    
    // open the recipes page when the user clicks on the link
    console.log(recipe.id);
    let id = recipe.id;
    anchor.href =  "recipeRender.html";
    anchor.addEventListener('click', function() {
        localStorage.setItem('selectedRecipeId', id);
    });
    
    anchor.appendChild(titleContent);
    anchor.appendChild(imageContent);
    recipeContainer.appendChild(anchor);
    
  });
}



