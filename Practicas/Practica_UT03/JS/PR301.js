function cloneObject(object){
    let ObjetoClonado = {...object};
    return ObjetoClonado;
}

let curso = {
    curso: 'daw',
}



let cloned = cloneObject(curso);
console.log(cloned);
