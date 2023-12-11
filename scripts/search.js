// extra api keys: d1f70067f78248078e71a58983a18e5f (indiano)
// db254b5cd61744d39a2deebd9c361444 (child)
// ebbf86dcedb34f56b0926b2a5bfd0541 (my key)
// 320786665a194e83b2a064d5eab24ea6 (gmail key)

let query = '';

function getQueryValue() {
  query = document.getElementById("myText").value;
  console.log(query);
  getApiRecipeData(query);
}


const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=320786665a194e83b2a064d5eab24ea6=${query}`;

  // Make a GET request to the API
async function getApiRecipeData() {
  const response = await fetch(apiUrl);
  recipeData = await response.json();
  console.log(recipeData);
  displayRecipesList(recipeData);
}

function displayRecipesList (data) {
  const recipeContainer = document.getElementById('recipesList-container');

  data.forEach(recipe => {
    let anchor = document.createElement('a');
    let title = document.createElement('p');
    console.log(recipe.id);
    let id = recipe.id;

    anchor.appendChild(title)
    recipeContainer.appendChild(anchor);
  });
}



