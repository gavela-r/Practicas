let nacimiento = prompt("Indicame su año de nacimiento");

let mensaje = nacimiento > 2010 ? "Fecha no valida" :
               nacimiento > 1994 ? "Genaracion Z" : 
               nacimiento > 1981 ? "Generacion Millenial":
               nacimiento > 1969 ? "Generacion X":
               nacimiento > 1949 ? "Baby Boomer":
               "Fecha no valida" 
alert(mensaje);         
