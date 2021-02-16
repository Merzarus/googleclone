const queryForm = document.getElementById('query-form');
const queryInput = document.getElementById('query-input');
const baseUrl = "https://www.google.com.br/search?q=";

function redirectToGoogleWithQuery(){
    const query = queryInput.value.replace(/\s/g, "+");
    window.location = baseUrl + query;
}