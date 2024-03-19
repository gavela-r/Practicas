let start = document.getElementById('btn-start');
let reset = document.getElementById('btn-reset');
let niveles = document.querySelectorAll('.diff-level');



start.addEventListener('click', empezarJuego);
reset.addEventListener('click', finalizarJuego);
niveles.forEach((element)=>{
    element.addEventListener('click', dificultad);
});

let click = 0;
let tiempo = 0; // tiempo medido en segundos
let reloj;
let width;
let Height;
let jugadores = [];


function empezarJuego(){
    let cuadrado = document.createElement('div');
    let empezar = document.getElementById('game-zone')
    cuadrado.classList.add('cuadrado');
    hacerclick(cuadrado);
    cuadrado.addEventListener( 'click', e => hacerclick( e.target ) );
    empezar.append(cuadrado);
    reloj =  setInterval(contarTiempo, 100);
    hacerclick(cuadrado);
    
    
}

function finalizarJuego(){
    let cuadrado = document.querySelector('.cuadrado');
    cuadrado.remove();
    clearInterval(reloj);
    escojerJugador();
    mostrarRanking();
}


function hacerclick(cuadrado){
    
    let x = Math.random() * (window.innerWidth - cuadrado.clientWidht);
    let y = Math.random() * (window.innerHeight - cuadrado.clientHeight);
    let nivelesDificultad = document.querySelector('.diff-level.selected').textContent;
   
    switch(nivelesDificultad){
        case '1': 
            width = (Math.floor(Math.random()*180))+15;
            Height = (Math.floor(Math.random()*180))+15;
            break;
        case '2':
            width = (Math.floor(Math.random()*150))+15;
            Height = (Math.floor(Math.random()*150))+15;
            break;
        case '3':
            width = (Math.floor(Math.random()*110))+15;
            Height = (Math.floor(Math.random()*110))+15;
            break;
        case '4':
            width = (Math.floor(Math.random()*100))+15;
            Height = (Math.floor(Math.random()*100))+15; 
            break;
        case '5':
            width = (Math.floor(Math.random()*50))+15;
            Height = (Math.floor(Math.random()*50))+15;
            break;
    }
    
    
     

    cuadrado.style.left = x + 'px';
    cuadrado.style.top = y + 'px';
    cuadrado.style.width = width + 'px';
    cuadrado.style.Height = Height + 'px';

    click += 1;
    dibujo();
}

function dibujo(){
    let puntuacion = document.getElementById('score');
    puntuacion.textContent = click;
    let temporizador = document.getElementById('time');
    temporizador.textContent = tiempo.toFixed(1);
}

function contarTiempo(){
    tiempo += 0.1;
    dibujo();
}

function dificultad(event){
    niveles.forEach((element)=>{
        element.classList.remove('selected');
    })
    event.currentTarget.classList.add('selected');

}

function escojerJugador(){
    jugadores.push(document.querySelector('#player-input').value);

}
function mostrarRanking(){

    let puntos = document.getElementById('score');
    

   
        puntos = document.querySelector('#ranking-first .ranking-score');
        puntos.innerHTML = `${puntos}`;
        puntos = document.querySelector('#ranking-second .ranking-score');
        puntos.innerHTML = `${puntos.target}`;
        puntos = document.querySelector('#ranking-third .ranking-score');
        puntos.innerHTML = `${puntos.target}`;


    jugadores.filter((item, index)=> index <= 2)
    .forEach((primero, segundo, tercero)=>{
        primero = document.querySelector('#ranking-first .ranking-name');
        primero.innerHTML = `${jugadores[0]}`;
        segundo = document.querySelector('#ranking-second .ranking-name');
        segundo.innerHTML = `${jugadores[1]}`
        tercero = document.querySelector('#ranking-third .ranking-name')
        tercero.innerHTML = `${jugadores[2]}`;
    });
   console.log(jugadores);
    

}