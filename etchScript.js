//functions

// makes grid item
function generateGrid(){
    const gridItem = document.createElement('div');
    gridItem.classList.add('gridItem');
    container.appendChild(gridItem);
}
//makes grid sizing
function generate(){
    size = prompt('what x by x dimension do you want the grid to be? ');

    container.style.gridTemplateColumns = `repeat(${size}, auto)`;
    container.style.gridTemplateRows = `repeat(${size}, auto)`;
    container.style.display = 'inline-grid';

    for (let i = 0; i < (Math.pow(size, 2)); i++){
        generateGrid();
    }
    const gridList = document.querySelectorAll('.gridItem');
    gridList.forEach(highlight);    
}


function highlight(e){
    e.addEventListener('mouseover', changeColor);
}
function changeColor(e) {
    this.classList.add('selected');
}

function resetPrompt() {
    const gridList = document.querySelectorAll('.gridItem');
    for (let i = 0; i < (Math.pow(size, 2)); i++) {
        gridList[i].classList.remove('activated');
        container.removeChild(gridList[i]);
        container.style.display = 'none';
    }
    size = 0;
    generate();
}



// Flow


const container = document.querySelector('.container');
generate();
const reset = document.querySelector('.reset');
reset.addEventListener('click',resetPrompt);
