let url = 'https://swapi.dev/api/planets/';
function information(){
fetch(url)
.then(response => response.json())
.then(data =>{
    let planeta = data.results;
    planeta.forEach(planet => {
        let fila = document.createElement('tr');

        let nombre = document.createElement('td');
        nombre.textContent = planet.name
        fila.appendChild(nombre);

        let poblacion = document.createElement('td');
        poblacion.textContent = planet.population;
        fila.appendChild(poblacion); 

        let clima = document.createElement('td');
        clima.textContent = planet.climate;
        fila.appendChild(clima);

        let terreno = document.createElement('td');
        terreno.textContent = planet.terrain;
        fila.appendChild(terreno);

        planetatabla.appendChild(fila);

        

        
    });

    if(data.next){
        url = data.next;
        information();
    }
});
}
information();