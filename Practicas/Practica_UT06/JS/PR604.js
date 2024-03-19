let cuadrado = document.createElement('div');
cuadrado.classList.add('cuadrado');
document.body.appendChild(cuadrado);

let contador = document.createElement('div');
contador.classList.add('contador');
contador.textContent = '00';
document.body.appendChild(contador);

cuadrado.addEventListener('click', hacerClick);

let click = 0;

function hacerClick(event){
    let cuadrado = event.target;
    let x = Math.random() * (window.innerWidth - cuadrado.clientWidth);
    let y = Math.random() *  (window.innerHeight - cuadrado.clientHeight);
    let width = (Math.floor(Math.random()*180))+15;
    let Height = (Math.floor(Math.random()*180))+15;

    cuadrado.style.left = x + 'px';
    cuadrado.style.top = y + 'px';
    cuadrado.style.width = width + 'px';
    cuadrado.style.Height = Height + 'px';

    click++;
    textoContador();
 }

function textoContador(){
    let textoContador = click < 10 ? '0' + click : click;
    contador.textContent = textoContador;
}
