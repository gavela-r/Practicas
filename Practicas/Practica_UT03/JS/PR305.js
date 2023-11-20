let usuario = {
    nombre: "adrian",
    apellido: "gavela",
    edad: undefined,
    ciudad: undefined,
    curso: "Daw"
}
function removeUnderfined(usuario){
    let usuarioCopiado = {};

    for(let key in usuario){
        if(!(usuario[key] == undefined)){
            usuarioCopiado[key] = usuario[key];
        }
    }

    return usuarioCopiado;
}
console.log(removeUnderfined(usuario));