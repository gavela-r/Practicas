 
function calc(operador,numero1, numero2){
    switch(operador){
        case '+':
            operador = Number(numero1) + Number(numero2);
            return operador;
            break;
        case '-':
            operador = numero1 - numero2;
            return operador;
            break;
        case '*':
            operador = numero1 * numero2;
            return operador;
            break;
        case '/':
            if (numero2 != 0){
            operador = numero1 / numero2;
        }else{
            return "no se puede dividir";
        }
        
        default:
            return "algo a salido mal";
        
    }
}


let operador = prompt("indivame un operador entre (+,-,*,/)"); 
let numero = Number(prompt("Indicame un numero"));
let numero2 = Number(prompt("Indicame un numero"));

alert(`El resultado es ${ calc( operador, numero, numero2) }`);