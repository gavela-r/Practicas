function XO(str){
    // str = str.toLowerCase();
    // let contadorX = 0;
    // let contadorO = 0;
    // for(let k =0; k < str.length; k++){
    //     if(str[k] == 'o'){
    //         contadorO++;
    //     }else if(str[k] == 'x'){
    //         contadorX++
    //     }
    // }
    // return contadorO == contadorX;

    
    let xo = Array.from(str.toLowerCase()).reduce((acum, item)=>{
        if(item.includes('o')){
            acum.o++;
        }else if(item.includes('x')){
            acum.x++;
        }
        return acum
    }, {x: 0, o: 0})
    return xo.x == xo.o;
    
}

console.log(XO("ooxx"))    // true
console.log(XO("xooxx"))   // false
console.log(XO("ooxXm"))   // true
console.log(XO("zpzpzpp")) // true 
console.log(XO("zzoo"))    // false