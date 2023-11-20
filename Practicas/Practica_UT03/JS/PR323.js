let arr = [
    {
        nombre: 'Pepe',
        ape1: 'Pérez',
        ape2: 'López',
        dni: '10100100',
        expediente: '1720',
        pass: '1234ABC',
        ciclo: 'DAW',
        notas: {
            DWEC: 7.8,
            DIW: 5.4,
            DWES: 9.4
        }
    },
    {
        nombre: 'Juan',
        ape1: 'Mázquez',
        ape2: 'Hernández',
        dni: '7340831',
        expediente: '342',
        pass: 'P@ssw0rd',
        ciclo: 'ASIR',
        notas: {
            DWEC: 8,
            DIW: 5.2,
            DWES: 4
        }
    }
];



function getNumberOfAlumnos(str, arr){

    let contador = 0;
    arr.forEach(alumno => {
        if(alumno.ciclo == str){
            contador++;
        }
    });
    return contador; 
}

let resultado = getNumberOfAlumnos('ASIR', arr);
console.log(resultado);