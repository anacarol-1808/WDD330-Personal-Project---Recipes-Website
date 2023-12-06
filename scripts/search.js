
let query = '';

function getQueryValue() {
  query = document.getElementById("myText").value;
  console.log(query);
  getApiData(query);
}

function getApiData(query) {
  const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=d1f70067f78248078e71a58983a18e5f&query=${query}`;

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
    })
    .catch(error => {
      // Log any errors that occurred during the fetch
      console.error('Fetch error:', error);
    });
}


