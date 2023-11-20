let parrafos = document.querySelectorAll('p');
let numeroP = parrafos.length;

let enlace = document.querySelectorAll('a');
let penultimo = enlace[enlace.length - 2];


let numeroEnlaces = document.querySelectorAll('[href="https://www.google.es"]');
let numeroE = numeroEnlaces.length;


let palabrasSegundo = parrafos[1];
let numeroPalabrasSegundo = palabrasSegundo.textContent.trim().split(' ').length;

console.log(numeroP);
console.log(penultimo);
console.log(numeroE);
console.log(numeroPalabrasSegundo)
