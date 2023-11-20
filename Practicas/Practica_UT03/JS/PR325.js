function getAverages(arr){
    return arr.map(({nombre, ape1, ape2, expediente, notas})=>{
        let nota = 0;
        let cont = 0;
        for(let asignatura in notas){
            nota += notas[asignatura];
            cont++;
        }
        return {
            alumno: `${nombre} ${ape1} ${ape2}`,
            expediente,
            nota: (nota/cont).toFixed(2),
        }
    })
}
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

console.log(getAverages(arr));