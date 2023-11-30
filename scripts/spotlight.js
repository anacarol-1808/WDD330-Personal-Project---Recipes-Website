// The home page should randomly load 3 different recipes to display


const baseURL = "index.html";
const linksURLChicken = "https://api.spoonacular.com/recipes/complexSearch?apiKey=d1f70067f78248078e71a58983a18e5f&query=chicken";
const linksURLBeef = "https://api.spoonacular.com/recipes/complexSearch?apiKey=d1f70067f78248078e71a58983a18e5f&query=beef";
const linksURLPork = "https://api.spoonacular.com/recipes/complexSearch?apiKey=d1f70067f78248078e71a58983a18e5f&query=pork";
const linksURLFish = "https://api.spoonacular.com/recipes/complexSearch?apiKey=d1f70067f78248078e71a58983a18e5f&query=fish";
const linksURLVegan = "https://api.spoonacular.com/recipes/complexSearch?apiKey=d1f70067f78248078e71a58983a18e5f&query=vegan";

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
    displayRecipes(dataChicken, 10, food);
}

async function getApiDataBeef() {
    const response = await fetch(linksURLBeef);
    dataBeef = await response.json();
    console.log(dataBeef);
    let food = 'beef';
    displayRecipes(dataBeef, 10, food);
}

async function getApiDataPork() {
    const response = await fetch(linksURLPork);
    dataPork = await response.json();
    console.log(dataPork);
    let food = 'pork';
    displayRecipes(dataPork, 10, food);
}

async function getApiDataFish() {
    const response = await fetch(linksURLFish);
    dataFish = await response.json();
    console.log(dataFish);
    let food = 'fish';
    displayRecipes(dataFish, 10, food);
}

async function getApiDataVegan() {
    const response = await fetch(linksURLVegan);
    dataVegan = await response.json();
    console.log(dataVegan);
    let food = 'vegan';
    displayRecipes(dataVegan, 10, food);
}

getApiDataChicken();
getApiDataBeef();
getApiDataPork();
getApiDataFish();
getApiDataVegan();



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

        let check = arrayOfNumbers.includes(numberRound, 0);

        if (check == false) {
            
            let heading = document.createElement('h3');
            let image = document.createElement('img');

            // Give content to the elements
            heading.textContent = `${data.results[numberRound].title}`;
            console.log(numberRound);
            console.log(data.results[numberRound].title);
            image.src = `${data.results[numberRound].image}`;
            image.alt = `${data.results[numberRound].title}`;

            //Append
            division.appendChild(heading);
            division.appendChild(image);

            //add Numberround to the array
            arrayOfNumbers.push(numberRound);
            index++;            
        }
        else {
            index = index;
        }
    }
}


