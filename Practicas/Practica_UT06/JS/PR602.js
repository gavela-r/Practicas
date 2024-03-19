let tabla = document.getElementById('tabla');

for(let k = 0; k < 10; k++){
    let casilla = '';
    for(let w = 0; w < 10; w++){
        casilla += `<div class='celda'>${k}${w}</div>`;
    }
    
    tabla.innerHTML += `<div class='fila'>${casilla}</div>`;
    let celda = document.querySelectorAll('div');
    console.log(celda);
    celda.forEach((element)=>{
        element.addEventListener('click', hacerClick);
    })
    celda.forEach((element)=>{
        element.addEventListener('contextmenu', contextMenu);
    })

    function hacerClick(event){
        
        if(event.currentTarget.classList.contains('celda')){
            event.currentTarget.classList.toggle('color');
        }else{
            event.currentTarget.classList.remove('color');
        }
    } 

    function contextMenu(event){
        event.preventDefault();
        if(event.currentTarget.classList.contains('celda')){
            event.currentTarget.classList.add('rojo');
        }
    }
}