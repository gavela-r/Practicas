function intersectObject(obj1, obj2){
    let persona = {};
    for (let key in obj1){
        for (let key2 in obj2){
            if (key2 == key){
                obj1[key] = obj2[key]; 
            }
        }
    }
    return persona;

}

let persona1 = {
    nombre: "adrian",
    edad: 22
}

let persona2 = {
    nombre: "adrian",
    edad: 34
}

let resultado = intersectObject(persona1, persona2);

    console.log(resultado);
