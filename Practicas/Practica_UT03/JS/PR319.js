function sortDates(arr){
    let fechaOrdenada = (fecha1, fecha2) =>{
    
        let [dia1, mes1, año1] = fecha1.split('-')
        let [dia2, mes2, año2] = fecha2.split('-')

        if (año1!==año2) {return año1-año2};
        if (mes1!==mes2) {return mes1-mes2};
        return dia1-dia2;
        
    };
    return arr.sort(fechaOrdenada);
}

console.log(sortDates(['09-09-2004', '12-03,2018', '27-02-2001']));