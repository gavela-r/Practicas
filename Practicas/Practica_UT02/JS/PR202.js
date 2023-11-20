/* Ejercicio 2
Crea un script que pida por pantalla al usuario tres datos:

El nombre
La nota del primer examen
La nota del segundo examen
A continuación mostrará por pantalla el mensaje
 "Hola <nombre>, la nota media de tus exámenes es <nota_media>" donde <nota_media> 
 es la suma de las dos notas introducidas divididas entre dos.*/

 let nombre = prompt('Indicame el nombre');
 let nota1 = prompt('Indicame la primera nota');
 let nota2 = prompt('Indicame la segun da nota');
 let notaMedia = Number(nota1);
 let notaMedia2 = Number(nota2);
 notaMedia = (nota1 + nota2) / 2;

 let mensaje = `Hola ${nombre}, la nota media de tus examenes es ${notaMedia}.`;
 console.log(mensaje);