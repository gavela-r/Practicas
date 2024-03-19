let url = "https://swapi.dev/api/planets/";
let option = {
    method: "GET",
}
let urlAnterior;
let urlSiguiente; 
document.getElementById('anterior')
.addEventListener('click', paginaAnterior)

document.getElementById('siguiente')
.addEventListener('click', paginaSiguiente)

function Informacion(){
fetch(url, option)
    .then(resul => resul.json())
    .then(response => {
        data = response;
        console.log(data);

        planetatabla.innerHTML = "";
        
        data.results.forEach(planets => {
        let fila = document.createElement('tr');
        
        let nombre = document.createElement('td');
        nombre.textContent = planets.name;
        fila.appendChild(nombre);

        let poblacion = document.createElement('td');
        poblacion.textContent = planets.population;
        fila.appendChild(poblacion);

        let clima = document.createElement('td');
        clima.textContent = planets.climate;
        fila.appendChild(clima);

        let terreno = document.createElement('td');
        terreno.textContent = planets.terrain;
        fila.appendChild(terreno);

        planetatabla.appendChild(fila);

        urlAnterior = data.previous;
        urlSiguiente = data.next;
            
        })
});
}
function paginaAnterior(){
    if(urlAnterior){
        url = urlAnterior;
        Informacion();

    }
}

function paginaSiguiente(){
    if(urlSiguiente){
        url = urlSiguiente;
        Informacion();
    }
}


Informacion();