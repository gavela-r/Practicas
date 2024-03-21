function reverseWords(str){
    let inverso = str.split(' ');
    let reverso = inverso.map(index=>{
        return index.split('').reverse().join('');
    })
    let invertido = reverso.join(' ');

    return invertido;
}

console.log(reverseWords('Hola mundo'));      // 'aloH odnum'
console.log(reverseWords('IES Villabalter'));  // 'SEI retlaballiV'