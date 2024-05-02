let numero = [];
let suma = document.getElementById('suma');
let resta = document.getElementById('resta');
let multiplicacion = document.getElementById('multiplicacion');
let division = document.getElementById('division');
let igual = document.getElementById('igual');
let visor = document.getElementById('visor');
visor.value = 0;

function mostrarNumero(){
    let numeros = document.querySelectorAll('.numero');
    numeros.forEach(element => {
        element.addEventListener('click', function(){
            if(visor.value == 0){
                visor.value = element.value;
            }else{
                visor.value += element.value;
                
            }
            numero.push(element.value);
            console.log(numero);
        })
    });
    
}

function borrarNumeros(){
    let borrar = document.getElementById('buttonC');
    borrar.addEventListener('click', function(){
        numero = [];
        visor.value = 0;    
    })
}


function borrarUltimoNumero(){
    let flechaBorrado = document.getElementById('backspace');
    flechaBorrado.addEventListener('click', function(){
        numero.pop();
        visor.value = numero.join('');
        console.log(numero);
    })
}

function operaciones(){
    suma.addEventListener('click', function(){
        numero.push(suma.value);
        visor.value = 0;
    })

    resta.addEventListener('click', function(){
        
        numero.push(resta.value);
        visor.value = 0;
    })

    multiplicacion.addEventListener('click', function(){
        
        numero.push(multiplicacion.value);
        visor.value = 0;
    })

    division.addEventListener('click', function(){
        
        numero.push(division.value);
        visor.value = 0;
    })

    igual.addEventListener('click', function(){
        
        let resultado;
        let operacion = {
            n1: 0,
            n2: 0,
            op: '',
        };
        let num = 'n1'
        let mul = 10;
        numero.forEach(element =>{
           
           
            if( isNaN(parseInt(element)) ){
                operacion.op = element;
                num = 'n2';
            }else{
                operacion[num] = (operacion[num] * mul) + parseInt(element);
                
            }
            switch (operacion.op){
                case '+':
                    resultado = operacion.n1 + operacion.n2;
                    break;
                case '-':
                    resultado = operacion.n1 - operacion.n2;
                    break;
                case 'x':
                    resultado = operacion.n1 * operacion.n2;
                    break;
                case '÷':
                    resultado = operacion.n1 / operacion.n2;
                    break;
                default:
                    break;

            }
        })
        visor.value = resultado;
    })
}

function CalculadoraPorTeclado(){
    document.body.addEventListener('keydown', function(event) {
        console.log(event);
        if('0123456789'.includes(event.key)){
            if(visor.value == 0){
                visor.value = event.key;
            }else{
                visor.value += event.key;
            }
            numero.push(event.key);
            console.log(numero);
        }
        
        if(event.key == 'Escape'){
            numero = [],
            visor.value = 0;
        }

        if(event.key == 'Backspace'){
            
            numero.pop();
            visor.value = numero.join('');
        }

        if(event.key == '+'){
            numero.push(event.key);
            visor.value = 0;
            
        }

        if(event.key == '-'){
            numero.push(event.key);
            visor.value = 0;
        }

        if(event.key == '*'){
            
            numero.push(event.key);
            visor.value = 0;
        }

        if(event.key == '/'){
            numero.push(event.key);
            visor.value = 0;
        }
        
        if(event.key == 'Enter'){
            let mul = 10;
            let operacion = {
                num1: 0,
                num2: 0,
                op: '',
            }
            let resultado;
            let num  = 'num1'
    
            numero.forEach(element=>{
                if(isNaN(parseInt(element))){
                    operacion.op = element;
                    num = 'num2';
                }else{
                    operacion[num] = (operacion[num] * mul) + parseInt(element);
                }
    
                switch(operacion.op){
                    case '+':
                        resultado = operacion.num1 + operacion.num2;
                        break;
                    case '-':
                        resultado = operacion.num1 - operacion.num2;
                        break;
                    case '*':
                        resultado = operacion.num1 * operacion.num2;
                        break;
                    case '/':
                        resultado = operacion.num1 / operacion.num2;
                        break;
                    default:
                        break;
                }
               
                
            })
                visor.value = resultado;
           
    
        }
      


    })
   
}


mostrarNumero();
borrarNumeros();
borrarUltimoNumero();
operaciones();
CalculadoraPorTeclado();