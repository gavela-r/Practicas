let mayor = ['hola', 'adrian', 'villavalter', 'IES'];

function maxString(arr){
    let palabra = '';
    
    for(let k = 0; k < arr.length; k++){
        if(arr[k] > palabra){
            palabra = arr[k];
        }
    }
    return palabra;
}
console.log(maxString(mayor));