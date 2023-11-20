function mergeObjects(object1, object2){
    let ObjetoClonado = {...object1, ...object2};
    return ObjetoClonado;
}  
    let nombre = {
        nombre: 'adrian'
    };

    let apellidos = {
        apellidos: 'gavela'
    }

    let resultado = mergeObjects(nombre, apellidos);
    console.log(resultado);
