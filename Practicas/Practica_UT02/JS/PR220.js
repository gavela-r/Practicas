function getFibonacciAT(n){
    return (n == 0) ? 0:
           (n == 1) ? 1:
           (getFibonacciAT(n-1) + getFibonacciAT(n-2));

}
let resultado = getFibonacciAT(5);
alert(resultado);