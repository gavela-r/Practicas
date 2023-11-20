/*function sendMessage(arr){
    
    for (let k = 0; k < arr.length; k++){
        let nombre = arr[k];
        console.log('Hola ' + nombre + ',bienvenido al curso de DWEC')
    }
    
}*/
let nombre = (["Adrian", "Chiara", "Manuel"]);
sendMessage(nombre);

function sendMessage(arr){
    return arr.forEach(element => {
        console.log('Hola ' + element + ',bienvenido al curso de DWEC')
    });
}