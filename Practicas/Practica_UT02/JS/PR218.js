
function isTriangle(num1, num2, num3){
    return (num1+num2>num3) && (num1+num3>num2) && (num2+num3>num1);
}

let num1 = prompt("Indicame un numero");
let num2 = prompt("Indicame un segundo numero");
let num3 = prompt("Indicame un tercer numero");
isTriangle(num1, num2, num3);
console.log(isTriangle(num1, num2, num3));