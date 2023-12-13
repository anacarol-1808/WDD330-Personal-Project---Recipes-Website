// d1f70067f78248078e71a58983a18e5f (indiano)
// db254b5cd61744d39a2deebd9c361444 (child)
// ebbf86dcedb34f56b0926b2a5bfd0541 (my key)
// 320786665a194e83b2a064d5eab24ea6 (gmail key)
// efefa91814cb4d3a92ea12c310f20072 (gui)
// 90cc90ac2d314d10b1f9d3cf850cd540 (mafo) 
// 0461f9f6ce4c4b5297e8c6394e5309fa (mafran) -- using this one
// 896979189fea41dfa19af91f1e970c01 (sabrine)
// 40a9caa5188547d2a29f1a25a33f0b79 (thomas)

// searchByIngredient.js
let query = '';

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
  getApiRecipeData(query);
}

async function getApiRecipeData(query) {
  const apiUrl = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=0461f9f6ce4c4b5297e8c6394e5309fa&ingredients=${query}&number=500`;

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);

    if (query) {
      displayRecipesList(data);
      saveToStorage(data);
    }
  } catch (error) {
    console.error('Fetch error:', error);
  }
}

function displayRecipesList(data) {
  const recipeContainer = document.querySelector('.grid-food');
  recipeContainer.innerHTML = '';

  data.forEach(recipe => {
    let anchor = document.createElement('a');
    let titleContent = document.createElement('h2');
    titleContent.innerHTML = recipe.title;
    let imageContent = document.createElement('img');
    imageContent.src = recipe.image;
    imageContent.alt = recipe.title;

    let id = recipe.id;
    anchor.href = "recipeRender.html";
    anchor.addEventListener('click', function () {
      localStorage.setItem('selectedRecipeId', id);
    });

    anchor.appendChild(titleContent);
    anchor.appendChild(imageContent);
    recipeContainer.appendChild(anchor);
  });
}

function saveToStorage(data) {
  if (query) {
    localStorage.setItem('recipeData', JSON.stringify(data));
  }
}

window.addEventListener('beforeunload', function () {
  sessionStorage.removeItem('selectedRecipeId');
});
