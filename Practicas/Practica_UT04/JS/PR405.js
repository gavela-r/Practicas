const button = document.getElementById('boton')
console.log(button);

button.addEventListener("click", function() {
    
    const num1 = Math.floor(Math.random()*255);
    const num2 = Math.floor(Math.random()*255);
    const num3 = Math.floor(Math.random()*255);
    document.body.style.backgroundColor = `rgb(${num1}, ${num2}, ${num3})`;
    
});
