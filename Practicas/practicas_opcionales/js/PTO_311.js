function maxSequence(arr){
    let suma = 0;
    for(let k = 0; k < arr.length; k++){
        suma += arr[k];
        
        console.log(suma);
    }
    return suma;
}

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));