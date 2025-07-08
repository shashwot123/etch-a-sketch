const container = document.querySelector('#container');

for (let i=0; i<16; i++){
    const newRow = document.createElement('div');
    newRow.classList.toggle('row-div');
    for (let j=0; j<16; j++){
        const newDiv = document.createElement('div');
        newDiv.classList.toggle('child-div');
        newRow.appendChild(newDiv);
    }
    container.appendChild(newRow);
}