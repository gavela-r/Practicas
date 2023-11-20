let cadena = "El veloz murciélago hindú comía feliz cardillo y kiwi. La cigüeña tocaba el saxofón detrás del palenque de paja.";

function isPangrama(str){
   
    for(let k = 0; k < str.length; k++){
        let letra = str[k];
        if(letra >= 'a' && letra >= 'z'){
            return true;
        }
    }
    return false;
}

console.log(isPangrama(cadena));
let cadena2 = "hola";
console.log(isPangrama(cadena2));