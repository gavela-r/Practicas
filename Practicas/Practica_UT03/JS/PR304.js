let a = {
    nombre: "adrian",
    apellido: "gavela",
    curso: "Daw"
}

let b = {
    nombre: "adrian", 
    apellido: "gavela",
    curso: "Daw",
    
}



function containsObject(a, b){
    for (let key in a){
        if(!(key in b)){
            return false
        }
    }
    return true;
}

console.log(containsObject(a, b));
