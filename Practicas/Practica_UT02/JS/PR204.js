/* Ejercicio 4
Crea un script que pida al usuario el radio de un círculo y muestre por pantalla una cadena de la forma 
El perímetro del círculo de radio <radio> es <perímetro> y
 su área es <área>.*/

 

let radio = Number(prompt("Ingrese el radio del circulo"));
let perimetro = 2 * 3.14 * radio;
let area = perimetro * Math.pow(radio,2);
let mensaje = `El perimetro del circulo de radio ${radio} es ${perimetro} y su area es ${area}`; 
console.log(mensaje);