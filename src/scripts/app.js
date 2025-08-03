// This file contains the JavaScript code for the application. It manages the functionality for error management, including loading error data, displaying it, and handling user interactions.

document.addEventListener('DOMContentLoaded', () => {
    const errorList = document.getElementById('error-list');

    // Load error data from JSON file
    fetch('./data/errors.json')
        .then(response => response.json())
        .then(data => {
            displayErrors(data);
        })
        .catch(error => {
            console.error('Error loading error data:', error);
        });

    // Function to display errors in the UI
    function displayErrors(errors) {
        errors.forEach(error => {
            const listItem = document.createElement('li');
            listItem.textContent = `Error Code: ${error.code}, Description: ${error.description}, Timestamp: ${new Date(error.timestamp).toLocaleString()}`;
            errorList.appendChild(listItem);
        });
    }
});