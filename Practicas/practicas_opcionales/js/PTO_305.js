function maxString(arr){
    let mayor = '';
    arr.forEach(element => {
        if(element > mayor){
            mayor = element
        } 
    });
    return mayor;
}

console.log(maxString(['hola', 'victor', 'villabalter', 'IES']));