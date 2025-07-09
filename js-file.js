// Select the main div
const container = document.querySelector('#container');

const DEFAULT_VALUE = 16;
const NEW_VALUE = "newGridSize";

const containerSize = 500;
const spacing = 0.5;

// Use user input as the size of the grid if it exists or use default value
let gridSize = localStorage.getItem(NEW_VALUE) || DEFAULT_VALUE;
// Make a grid of squares
// Create rows
for (let i=0; i<gridSize; i++){
    const newRow = document.createElement('div');
    newRow.classList.toggle('row-div');
    // Create columns
    for (let j=0; j<gridSize; j++){
        const newDiv = document.createElement('div');
        newDiv.classList.toggle('child-div');
        newRow.appendChild(newDiv);
    }
    container.appendChild(newRow);
}

// Select all divs with class name child-div
const childDivs = document.querySelectorAll('.child-div');

const cellSize = (containerSize/gridSize) - spacing * 2;
// Calculate size of each child div based on the grid size
childDivs.forEach(childDiv => {
    childDiv.style.width = `${cellSize}px`;
    childDiv.style.height = `${cellSize}px`;
    childDiv.style.margin = `${spacing}px`
});
// Apply hover effects for each square in the grid that the mouse hovers over
childDivs.forEach(childDiv => {
        childDiv.addEventListener('mouseenter', function(){
        childDiv.style.backgroundColor = 'lightgray';
        childDiv.classList.add('child-div-hover');
    });
});

const btn = document.querySelector('.reset-btn');

btn.addEventListener('click', function(){
    let newGridSize = 16;
    const userInput = parseInt(prompt("What size grid do you want?", newGridSize));
    if (userInput > 100){
        alert("Size of Grid must be below 100");
    }else {
        // If user inputs a value, store it to the NEW_VALUE
        if (userInput !== null){
            newGridSize = userInput
            localStorage.setItem(NEW_VALUE, newGridSize);
            location.reload();
        }
    }
});