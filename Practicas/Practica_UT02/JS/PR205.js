let numero;

do{
    numero = prompt("indicame el numero correcto");
    if (numero == 45){
        alert(`Has introducido el numero ${numero}`);
    }else{
        alert("vuelve a introducir un numero");
    }
    console.log(numero);
}while(numero != 45)


