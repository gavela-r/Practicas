function isHeterograma(str){
    let letras = '';
    for(let k = 0; k < str.length; k++){
        let letra = str[k];
        if(letras.includes(letra)){
            return false;
        }
        letras += letra;
    }
    return true;
}

console.log(isHeterograma('villabalter'));
console.log(isHeterograma('victor'));