function countVowels(str){
    str = str.toLowerCase();
    const vocales = 'aeiou';
    let contador = 0;

    for (let k = 0; k < str.length; k++){
        if (vocales.includes(str[k])){
            contador++;
        }
    }
   return contador; 
}

const cadena = "esto es una cadena";
const vocales = countVowels(cadena);
console.log('el numero de vocale es: ' + vocales);