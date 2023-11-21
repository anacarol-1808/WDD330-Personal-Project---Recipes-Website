// Replace 'your-api-url' with the actual API URL you want to use
let query = '';

function myFunction() {
  query = document.getElementById("myText").value;
  console.log(query);
}


const apiUrl = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=ebbf86dcedb34f56b0926b2a5bfd0541';

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