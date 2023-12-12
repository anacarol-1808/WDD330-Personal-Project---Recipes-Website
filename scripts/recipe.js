// The home page should randomly load 3 different recipes to display
// d1f70067f78248078e71a58983a18e5f (indiano) -- using this one
// db254b5cd61744d39a2deebd9c361444 (child)
// ebbf86dcedb34f56b0926b2a5bfd0541 (my key)
// 320786665a194e83b2a064d5eab24ea6 (gmail key)
// efefa91814cb4d3a92ea12c310f20072 (gui)
// 90cc90ac2d314d10b1f9d3cf850cd540 (mafo) -- using this one
// 0461f9f6ce4c4b5297e8c6394e5309fa (mafran)


let type = '';
const apiKey = '90cc90ac2d314d10b1f9d3cf850cd540';
const apiUrl_one = 'https://api.spoonacular.com/recipes/complexSearch';
    
async function getApiData(type) {
    const url = `${apiUrl_one}?apiKey=${apiKey}&type=${type}&number=100`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.number);
    let lenght = 0;
    if (data.number > data.totalResults){
        lenght = data.totalResults;
    }
    else if (data.totalResults > data.number){
        lenght = data.number;
    }
    displayRecipes(data, lenght, type);
}


function displayRecipes(data, lenght, type) {
    let index = 0;
    const arrayOfNumbers = [];
    let container = document.getElementById('recipeContainer');
    console.log(data);

    while (index < 3) {
        //getting random position 
        let number = Math.random() * (lenght-1);
        let numberRound = Math.round(number);

        let check = arrayOfNumbers.includes(numberRound);

        if (check == false) {
            
            let heading = document.createElement('h2');
            let title_one = document.createElement('h3');
            let anchor = document.createElement('a')
            let image = document.createElement('img');

            // Give content to the elements
            title_one.textContent = `${data.results[numberRound].title}`;
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
            gridItem.appendChild(title_one);
            gridItem.appendChild(anchor);
            anchor.appendChild(image);

            container.appendChild(gridItem);

            //add Numberround to the array
            arrayOfNumbers.push(numberRound);
            index++;            
        }
        else {
            index = index;
        }
    }
}




