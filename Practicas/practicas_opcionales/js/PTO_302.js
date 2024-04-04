function isIsograma(str){
    let contador = {

    };
    
    str.split('').forEach(letra => {
        
        //contador[letra] = contador[letra] ? contador[letra]+1 :1
        if(contador[letra]){
            contador[letra] += 1;
        }else{
            contador[letra] = 1;
        }
        let veces;
        for(letra in contador){
            if(!veces){
                veces = contador[letra];
                console.log(veces);
            }else if(contador[letra] != veces){
                return false;
            }
            
        }
        console.log(contador);
    });
    return true;
} 

console.log(isIsograma('aaabbbcccdddrrr'));
console.log(isIsograma('papelera escritura'));
console.log(isIsograma('hola'));