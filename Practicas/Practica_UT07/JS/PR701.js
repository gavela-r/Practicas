fetch('https://swapi.dev/api/planets/')
    .then(response => response.json())
    .then(data =>{
        let planetas = data.results;
        planetas.forEach(planet => {
        let fila = document.createElement('tr');
        
        let nombre = document.createElement('td');
        nombre.textContent = planet.name;
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
    });