function isHeterograma(str){
    let palabra = '';
    for(let k = 0; k < str.length; k++){
        if(palabra.includes(str[k])){
            return false;
        }
        palabra += str[k];
    }
    return true;
}

console.log(isHeterograma('villabalter'));
console.log(isHeterograma('victor'));
console.log(isHeterograma('aaaaahla'));