function removeVowels(str){
    let resultado = "";

    for (let k of str){
       
        if (!"aeiouAEIOU ".includes(k)){
            resultado = resultado + k;
        }
    }
    return resultado;
}


const frase = 'Hola Mundo'
const resultado = removeVowels(frase);
console.log(resultado);

