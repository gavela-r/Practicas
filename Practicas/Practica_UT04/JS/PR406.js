let div = document.querySelector("div");
let boton = document.querySelector("button");

boton.addEventListener("click", function(){
    let imagen = document.querySelector("img:last-child");
    div.prepend(imagen);
})

