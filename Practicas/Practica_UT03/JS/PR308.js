function countLetters(str){
    
    const letterCount = {};

    for (let k = 0; k < str.length; k++){
        const letter = str[k];
        if (letterCount[letter]){
            letterCount[letter]++;
        }else{
            letterCount[letter] = 1;
        }
    }
    return letterCount;
}

const frase = 'Esto es una cadena para realizar el ejercicio';
const resultado = countLetters(frase);
console.log(resultado);