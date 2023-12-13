// d1f70067f78248078e71a58983a18e5f (indiano)
// db254b5cd61744d39a2deebd9c361444 (child)
// ebbf86dcedb34f56b0926b2a5bfd0541 (my key)
// 320786665a194e83b2a064d5eab24ea6 (gmail key)
// efefa91814cb4d3a92ea12c310f20072 (gui)
// 90cc90ac2d314d10b1f9d3cf850cd540 (mafo) 
// 0461f9f6ce4c4b5297e8c6394e5309fa (mafran) 
// 896979189fea41dfa19af91f1e970c01 (sabrine)
// 40a9caa5188547d2a29f1a25a33f0b79 (thomas) -- using this one

document.addEventListener('DOMContentLoaded', function () {
  loadAndDisplayData();
});

function loadAndDisplayData() {
  const storedData = JSON.parse(localStorage.getItem('recipeData'));

  if (storedData) {
    displayRecipesList(storedData);
  }
}

function getQueryValue() {
  query = document.getElementById("myText").value;
  console.log(query);
  getApiRecipeData();
}

// Make a GET request to the API
async function getApiRecipeData() {
  let apiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=40a9caa5188547d2a29f1a25a33f0b79&query=${query}&number=100`;
  const response = await fetch(apiUrl);
  const recipeData = await response.json();
  console.log(recipeData);

  if (query) {
    displayRecipesList(recipeData);
    saveToStorage(recipeData);
  }
}

function displayRecipesList(data) {
  let recipeContainer = document.getElementById('grid-food');
  recipeContainer.innerHTML = '';

  data.results.forEach(item => {
    // Title
    let title_one = document.createElement('h3');
    title_one.innerHTML = item.title;

    // Image
    let image_one = document.createElement('img');
    image_one.src = item.image;
    image_one.alt = item.title;

    // Get the recipe ID
    let id = item.id;

    // Set the anchor to open the render recipe file
    let anchor = document.createElement('a');
    anchor.href = "recipeRender.html";

    // Modified click event listener to save selectedRecipeId
    anchor.addEventListener('click', function() {
      localStorage.setItem('selectedRecipeId', id);
    });

    // Append created elements to the container
    anchor.appendChild(title_one);
    anchor.appendChild(image_one);
    recipeContainer.appendChild(anchor);
  });
}

// Save the recipe data to local storage if the user clicked the "search" button
function saveToStorage(data) {
  if (query) {
    localStorage.setItem('recipeData', JSON.stringify(data));
  }
}

// Clear data from local storage on window close
window.addEventListener('beforeunload', function () {
  sessionStorage.removeItem('selectedRecipeId');
});




