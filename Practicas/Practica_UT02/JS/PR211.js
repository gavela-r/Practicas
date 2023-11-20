let numero = 10;
do{
    numero = prompt("Introduce un numero");
    if (numero > 0 || numero === Number){
        if (numero % 2 == 0){
            alert("El numero es par");
        }else{
            alert("El numero es impar");
        }
    }
}while(numero <= 0 || numero != Number);
