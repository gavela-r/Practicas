function replaceWithPosition(str){
let resultado = " ";

    for (let k of str){
        resultado += ` ${"abcdefghijklmnopqrstuvwxz ".indexOf(k)}`;
    }
    return resultado;
}



console.log(replaceWithPosition("hola mundo"));