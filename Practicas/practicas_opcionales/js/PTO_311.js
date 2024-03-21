function maxSequence(arr){
    let suma = 0;
    let sumaMax = 0;
    for(let k = 0; k < arr.length; k++){
        suma += arr[k];
        if(suma < 0){
            suma = 0;
        }else if(suma > sumaMax){
            sumaMax = suma;
        }

        
    }
    return sumaMax;
}

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));