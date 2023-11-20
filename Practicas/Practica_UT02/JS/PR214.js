let numero = Number(prompt("Indicame un numero"));

function factorial(n){
    if (n == 0 || n == 1){
        return 1;
    }
    while (n > 1){
        n--;
        numero *= n;
    }
    return numero;
}
factorial(numero);
console.log(numero);