// The home page should randomly load 3 different recipes to display
// extra api keys: d1f70067f78248078e71a58983a18e5f (indiano)
// db254b5cd61744d39a2deebd9c361444 (crianca)

const baseURL = "index.html";
const linksURLChicken = "https://api.spoonacular.com/recipes/complexSearch?apiKey=ebbf86dcedb34f56b0926b2a5bfd0541&query=chicken&type=main course&number=50";
const linksURLBeef = "https://api.spoonacular.com/recipes/complexSearch?apiKey=ebbf86dcedb34f56b0926b2a5bfd0541&query=beef&type=main course&number=50";
const linksURLPork = "https://api.spoonacular.com/recipes/complexSearch?apiKey=ebbf86dcedb34f56b0926b2a5bfd0541&query=pork&type=main course&number=50";
const linksURLFish = "https://api.spoonacular.com/recipes/complexSearch?apiKey=ebbf86dcedb34f56b0926b2a5bfd0541&query=fish&type=main course&number=50";
const linksURLVegan = "https://api.spoonacular.com/recipes/complexSearch?apiKey=ebbf86dcedb34f56b0926b2a5bfd0541&query=vegan&type=main course&number=50";

let dataChicken = '';
let dataBeef = '';
let dataPork = '';
let dataFish = '';
let dataVegan = '';

async function getApiDataChicken() {
    const response = await fetch(linksURLChicken);
    dataChicken = await response.json();
    console.log(dataChicken);
    let food = 'chicken';
    displayRecipes(dataChicken, 50, food);
}

async function getApiDataBeef() {
    const response = await fetch(linksURLBeef);
    dataBeef = await response.json();
    console.log(dataBeef);
    let food = 'beef';
    displayRecipes(dataBeef, 50, food);
}

async function getApiDataPork() {
    const response = await fetch(linksURLPork);
    dataPork = await response.json();
    console.log(dataPork);
    let food = 'pork';
    displayRecipes(dataPork, 50, food);
}

async function getApiDataFish() {
    const response = await fetch(linksURLFish);
    dataFish = await response.json();
    console.log(dataFish);
    let food = 'fish';
    displayRecipes(dataFish, 50, food);
}

async function getApiDataVegan() {
    const response = await fetch(linksURLVegan);
    dataVegan = await response.json();
    console.log(dataVegan);
    let food = 'vegan';
    displayRecipes(dataVegan, 50, food);
}

getApiDataChicken();
// getApiDataBeef();
// getApiDataPork();
// getApiDataFish();
// getApiDataVegan();



function displayRecipes(data, lenght, food) {
    let index = 0;
    const arrayOfNumbers = [];
    let division = document.querySelector(`#spotlightAdv-${food}`);
    console.log(data);
    console.log(lenght);
    while (index < 3) {
        //getting random position 
        let number = Math.random() * (lenght-1);
        let numberRound = Math.round(number);

        let check = arrayOfNumbers.includes(numberRound);

        if (check == false) {
            
            let heading = document.createElement('h3');
            let anchor = document.createElement('a')
            let image = document.createElement('img');

            // Give content to the elements
            heading.textContent = `${data.results[numberRound].title}`;
            console.log(numberRound);
            console.log(data.results[numberRound].title);
            let id = `${data.results[numberRound].id}`;
            anchor.href =  "recipe.html";
            anchor.addEventListener('click', function() {
                localStorage.setItem('selectedRecipeId', id);
            });
            image.src = `${data.results[numberRound].image}`;
            image.alt = `${data.results[numberRound].title}`;

            //Append
            const gridItem = document.createElement('div');
            gridItem.classList.add('grid-item');
            gridItem.appendChild(heading);
            gridItem.appendChild(anchor);
            anchor.appendChild(image);

            division.appendChild(gridItem);

            //add Numberround to the array
            arrayOfNumbers.push(numberRound);
            index++;            
        }
        else {
            index = index;
        }
    }
}


