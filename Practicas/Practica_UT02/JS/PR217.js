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

function converFromBytes(capacidad, unidadMedida){
    
    let res;
    switch(unidadMedida){
        case "KB":
        case "Kilobyte":
            res = capacidad / 1000;
            break;
        case "MB":
        case "Megabyte":
            res = capacidad / 1000000;
            break;
        case "GB":
        case "Gigabyte":
            res = capacidad / 1000000000;
            break;
        case "TB":
        case "Terabyte":
            res = capacidad / 1000000000000;
            break;
        case "PB":
        case "Petabyte":
            res = capacidad / 1000000000000000;
            break;
        case "EB":
        case "Exabyte":
            res = capacidad / 1000000000000000000;
            break;
        default:
            return "La medida indicada es erronea";
        
    }
    return res;
}
    

function convert( capacidad, from, to) {
    let bytes = converToBytes(capacidad, from);
    return converFromBytes(bytes, to);
}

let capacidad = prompt("Indicame una capacidada");
let from = prompt("Indicame una unidad de medida");
let to = prompt("Indicame a que unidad quieres transformarla");
let convertido = convert(capacidad, from, to);

alert(`${capacidad} ${from} se transformara en ${convertido} ${to}`);
    