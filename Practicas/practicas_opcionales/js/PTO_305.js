function maxString(arr){
    let contador = 0;
    let palabra = '';

    for(let k = 0; k < arr.length; k++){
        if(arr[k].length > contador){
            contador = arr[k].length;
            palabra = arr[k];
        }
    }
    return palabra;
}
console.log(maxString(['hola', 'victor', 'villabalter', 'IES']));