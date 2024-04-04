let abecedario = 'abcdefghijklmnñopqrstuvwxyz';

function isPangrama(str){
    let letra = '';
    for(let k = 0; k < str.length; k++){
        abecedario = str[k];
        if(letra.includes(abecedario)){
            return true;
        }
        letra += abecedario;
    }
    return false;
}

console.log(isPangrama('El veloz murciélago hindú comía feliz cardillo y kiwi. La cigüeña tocaba el saxofón detrás del palenque de paja.'));
console.log(isPangrama('hola'));
