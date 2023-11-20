let numero = prompt("indicame un numero");
let mayor = numero;
let menor = numero;

for (let k = 1; k <= 5; k++){
    let numero = prompt("indicame un numero");
    if (numero > mayor){
        mayor = numero;
    }
}
alert(`El numero menor es ${menor} y el mayor es ${mayor}`);

 