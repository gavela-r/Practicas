function isEqualArr(arr1, arr2){
    if (arr1.length !== arr2.length){
        return false;
    }
    for(let k = 0; k < arr1.length; k++){
            if (arr1[k] !== arr2[k]){
                return false;
            }
    }
    return true;
}
let resultado = isEqualArr([2,3,4], [2,3,4]);
console.log(resultado);

