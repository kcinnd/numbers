document.addEventListener('DOMContentLoaded', function() {
    // Select the element that displays the number
    var numberElement = document.getElementById('number');

    // Add a click event listener to that element
    numberElement.addEventListener('click', function() {
        // Change the text content of the element to '5' when it's clicked
        this.textContent = '5';
    });
});
