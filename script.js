const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const searchTerm = form.querySelector('input[type="text"]').value;
  
  // Do something with the search term, like submit a request to the server
});
