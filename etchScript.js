const container = document.querySelector('.container');
for (let i = 0; i < 16; i++){
    const column = document.createElement('div');
    column.setAttribute('class' , 'column' );
    column.setAttribute('data-type' , 'pixel');
    for (let j = 0; j < 16; j++){
        const row = document.createElement('div');
        row.setAttribute('class' , 'row' );
        row.setAttribute('data-type' , 'pixel');
        column.appendChild(row);
    }
container.appendChild(column);
}