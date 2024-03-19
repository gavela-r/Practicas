let abecedario = 'abcdefghijklmnñopqrstuvwxyz'


function isPangrama(str){
    let letras = '';
    for(let k = 1; k < str.length; k++){
        abecedario = str[k];
        if(letras.includes(abecedario)){
            return true
        }
        letras += abecedario;
    }
    return false
}

console.log(isPangrama('El veloz murciélago hindú comía feliz cardillo y kiwi. La cigüeña tocaba el saxofón detrás del palenque de paja.'));
console.log(isPangrama('hola'));