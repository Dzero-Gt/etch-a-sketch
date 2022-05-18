const container = document.querySelector('.container');
let k = 0;
for (let i = 0; i < 16; i++){
    const column = document.createElement('div');
    column.setAttribute('class' , 'column' );
    for (let j = 0; j < 16; j++){
        const row = document.createElement('div');
        row.setAttribute('class' , 'row' );
        row.setAttribute('data-type' , 'pixel');
        column.appendChild(row);
    }
container.appendChild(column);
}
const pixels = document.querySelectorAll('div[data-type=pixel]');
pixels.forEach(highlight);

function highlight(e){
    e.addEventListener('mouseover', changeColor);
}
function changeColor(e) {
    
    this.setAttribute('class', 'row-selected');
}

