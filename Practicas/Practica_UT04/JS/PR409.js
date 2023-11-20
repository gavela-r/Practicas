
let boton = document.getElementById('add-button');
let lista = [];

function renderList(lista) {
    let ul = document.querySelector('ul');
    ul.innerHTML = "";
    for(let k = 0; k < lista.length; k++){
        let li = document.createElement('li');
        li.textContent = lista[k];
        ul.appendChild(li)
    }
}



 

boton.addEventListener('click', () =>{
        let texto = document.getElementById('input-text');
        lista.push(texto.value);
        renderList(lista);
    
})
