function coverToBytes(capacidad, unidadMedida){
    
    let res;
    switch(unidadMedida){
        case "KB":
        case "Kilobyte":
            res = capacidad * 1000;
            break;
        case "MB":
        case "Megabyte":
            res = capacidad * 1000000;
            break;
        case "GB":
        case "Gigabyte":
            res = capacidad * 1000000000;
            break;
        case "TB":
        case "Terabyte":
            res = capacidad * 1000000000000;
            break;
        case "PB":
        case "Petabyte":
            res = capacidad * 1000000000000000;
            break;
        case "EB":
        case "Exabyte":
            res = capacidad * 1000000000000000000;
            break;
        default:
            return "La medida indicada es erronea";
    }
    return res;
}
    

let capacidad = prompt("Indicame una capacidad");
let medida = prompt("Indicame una medida");
let capacidadMedida = coverToBytes(capacidad, medida);
alert(`${capacidad} ${medida} es igual a ${capacidadMedida}`);