function XO(str){
    str = str.toLowerCase();
    let contadorX = 0;
    let contadorO = 0;
    for(let k =0; k < str.length; k++){
        if(str[k] == 'o'){
            contadorO++;
        }else if(str[k] == 'x'){
            contadorX++
        }
    }
    return contadorO == contadorX;
}

console.log(XO("ooxx"))    // true
console.log(XO("xooxx"))   // false
console.log(XO("ooxXm"))   // true
console.log(XO("zpzpzpp")) // true 
console.log(XO("zzoo"))    // false