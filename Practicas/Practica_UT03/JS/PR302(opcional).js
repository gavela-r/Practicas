let cadena = "acondicionador";

function isIsograma(str){
    let letras = "";
    for(let k = 0; k < str.length; k++){
        let letra = str[k];
        if(letras.includes(letra)){
            return true;
        }
        letras += letra;
    }
    return false;
}
console.log(isIsograma(cadena));

