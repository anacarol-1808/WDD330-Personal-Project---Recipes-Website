// d1f70067f78248078e71a58983a18e5f (indiano)
// db254b5cd61744d39a2deebd9c361444 (child)
// ebbf86dcedb34f56b0926b2a5bfd0541 (my key)
// 320786665a194e83b2a064d5eab24ea6 (gmail key)
// efefa91814cb4d3a92ea12c310f20072 (gui)
// 90cc90ac2d314d10b1f9d3cf850cd540 (mafo) 
// 0461f9f6ce4c4b5297e8c6394e5309fa (mafran) -- using this one
// 896979189fea41dfa19af91f1e970c01 (sabrine)
// 40a9caa5188547d2a29f1a25a33f0b79 (thomas)

const APIkey_one = 'd1f70067f78248078e71a58983a18e5f';
const APIkey_two = 'db254b5cd61744d39a2deebd9c361444';
const APIkey_three = 'ebbf86dcedb34f56b0926b2a5bfd0541';
const APIkey_four = '320786665a194e83b2a064d5eab24ea6';
const APIkey_five = 'efefa91814cb4d3a92ea12c310f20072';


const linksURLChicken = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${APIkey_one}&query=chicken&type=main course&number=500`;
const linksURLBeef = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${APIkey_two}&query=beef&type=main course&number=500`;
const linksURLPork = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${APIkey_three}&query=pork&type=main course&number=500`;
const linksURLFish = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${APIkey_four}&query=fish&type=main course&number=500`;
const linksURLVegan = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${APIkey_five}&query=vegan&type=main course&number=500`;

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
    let lenght = 0;
    if (dataChicken.number > dataChicken.totalResults){
        lenght = dataChicken.totalResults;
    }
    else if (dataChicken.totalResults > dataChicken.number){
        lenght = dataChicken.number;
    }
    console.log(lenght);
    displayRecipes(dataChicken, lenght, food);
}

async function getApiDataBeef() {
    const response = await fetch(linksURLBeef);
    dataBeef = await response.json();
    console.log(dataBeef);
    let food = 'beef';
    let lenght = 0;
    if (dataBeef.number > dataBeef.totalResults){
        lenght = dataBeef.totalResults;
    }
    else if (dataBeef.totalResults > dataBeef.number){
        lenght = dataBeef.number;
    }
    console.log(lenght);
    displayRecipes(dataBeef, lenght, food);
}

async function getApiDataPork() {
    const response = await fetch(linksURLPork);
    dataPork = await response.json();
    console.log(dataPork);
    let food = 'pork';
    let lenght = 0;
    if (dataPork.number > dataPork.totalResults){
        lenght = dataPork.totalResults;
    }
    else if (dataPork.totalResults > dataPork.number){
        lenght = dataPork.number;
    }
    console.log(lenght);
    displayRecipes(dataPork, lenght, food);
}

async function getApiDataFish() {
    const response = await fetch(linksURLFish);
    dataFish = await response.json();
    console.log(dataFish);
    let food = 'fish';
    let lenght = 0;
    if (dataFish.number > dataFish.totalResults){
        lenght = dataFish.totalResults;
    }
    else if (dataFish.totalResults > dataFish.number){
        lenght = dataFish.number;
    }
    console.log(lenght);
    displayRecipes(dataFish, lenght, food);
}

async function getApiDataVegan() {
    const response = await fetch(linksURLVegan);
    dataVegan = await response.json();
    console.log(dataVegan);
    let food = 'vegan';
    let lenght = 0;
    if (dataVegan.number > dataVegan.totalResults){
        lenght = dataVegan.totalResults;
    }
    else if (dataVegan.totalResults > dataVegan.number){
        lenght = dataVegan.number;
    }
    console.log(lenght);
    displayRecipes(dataVegan, lenght, food);
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
    while (index < 6) {
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
            anchor.href =  "recipeRender.html";
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


