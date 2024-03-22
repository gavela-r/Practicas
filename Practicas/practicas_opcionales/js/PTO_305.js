function maxString(arr){
    let numeroLetras = 0;
    let palabra = '';

    for(let k = 0; k < arr.length; k++){
        if(arr[k].length > numeroLetras){
            numeroLetras = arr[k].length;
            palabra = arr[k];
            
        }
        
    }
    return palabra;
}

console.log(maxString(['hola', 'victor', 'villabalter', 'IES']));