let cadena = "heterograma";

function isHeterograma(cadena){
    let letras = "";
    for(let k = 0; k < cadena.length; k++){
        let letra = cadena[k];
        if(letras.includes(letra)){
            return false
        }
        letras += letra
        
    }
    return true;
}   

console.log(isHeterograma(cadena));
