function createPow(arr, pow){
    let multiplicador = [];
    for(let k = 0; k < arr.length; k++){
        
        multiplicador.push(arr[k]**pow);
    }
    return multiplicador;
}

function createPow(arr, pow){
    return arr.map(num => Math.pow(num, pow));
}

let resultado = createPow([1,3,5], 4);
console.log(resultado);
