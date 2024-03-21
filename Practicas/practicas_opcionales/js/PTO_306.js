function getNames(arr){
    return arr.map(name =>{
        let [firstName, ...lastName] = name.split(' ');
        return {
            nombre: firstName,
            apellidos: lastName.join(' ')
        };
    })
}



console.log(getNames( ['Victor González Rodríguez', 'Pepe Pérez Fernández']));