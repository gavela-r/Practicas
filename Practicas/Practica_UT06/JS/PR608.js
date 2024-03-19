
const data ={
    'Castilla y Leon':{
        Leon:['Leon', 'San Andres', 'La Bañeza'],
        Zamora:['Zamora', 'Benavente'],
    },
    'Galicia':{
        coruña:['A Acea',  'A Abrigosa', 'A Abellariza']
    },

    'Cataluña':{
        Barcelona:['Hospitalet de Llobregat', 'Mataro', 'Manresa']
    }
}

let formulario = document.getElementById('formulario');
let comunidad = document.getElementById('comunidad');
let provincia = document.getElementById('provincia');
let localidad = document.getElementById('localidad');


function escogerCominidad(){
    for (const key in data) {
        comunidad.innerHTML += `<option value='${key}'>${key}</option>`;
    }
}
escogerCominidad();

function escogerProvincia(){
    for (const key in data[0]) {
       if(data[key]){
            provincia.innerHTML += `<option value='${data.leon}'>${data.leon}</option>`;
            console.log(provincia);
       }
    }
}
escogerProvincia();