let tabla = document.getElementById('tabla');

for(let k = 0; k < 10; k++){
    let casilla = ''; 
    
    for(let w = 0; w < 10; w++){
        casilla += `<div class='celda'>${k}${w}</div>`;
        
    }
    tabla.innerHTML += `<div class='fila'>${casilla}</div>`;

    let celdas = document.getElementsByClassName('celda');
    
    let array = Array.from(celdas) 
    array.forEach((element)=>{
        element.addEventListener('click', hacerClick);
    });

    function hacerClick(event){
        let cuerpo = document.createElement('div');
        let casilla = document.getElementById('tabla');
        cuerpo.innerHTML = `<h1>casilla: ${event.target.textContent}</h1>`;
        casilla.append(cuerpo);
       
    }
}