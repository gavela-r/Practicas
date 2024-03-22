function getNames(arr){
    return arr.map(str =>{
        [nom, ape1, ape2] = str.split('');
        return {
            nombre: nom,
            apeliidos: `${ape1} ${ape2}`
        }
    })
}



console.log(getNames( ['Victor González Rodríguez', 'Pepe Pérez Fernández']));