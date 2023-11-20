function combineArr(arr1, arr2){
    let combinar = [];
    for (let k = 0; k < arr1.length; k++){
            combinar = arr1.concat(arr2);
        
    }
    return combinar;
}
let resultado = combineArr([1,2,3], [4,5,6]);
console.log(resultado);