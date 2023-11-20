let numero =Number(prompt("Indicame un numero"));
let contador = 0;
let i = 1;
    
    while ( contador < numero) {
        
        if ( isPrime(i) ){
            contador++;
            console.log(i);
        }
        i += 1;
    }




