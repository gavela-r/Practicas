/*function getOdd(arr){
    let impar = [];
    for(let k = 0; k < arr.length; k++){
        if (arr[k] % 2 != 0){
            impar.push(arr[k]);
        }
    }
    return impar;
}*/

let resultado = getOdd([1,2,3,4,5,6,7]);
console.log(resultado);


function getOdd(arr){

    let b = arr.filter(item =>  {
        if(item % 2 != 0){
            return true;
        } else {
            return false;
        }   
    });

    return b;
    
}