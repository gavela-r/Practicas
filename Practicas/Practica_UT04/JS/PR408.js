let totalMilis = 0;

let interval = setInterval(updateTime, 100)

function updateTime(){
     totalMilis += 100;
     let milis = (totalMilis % 1000).toFixed(0).padStart(3, '0');
     let secs = ((totalMilis/1000) % 60).toFixed(0).padStart(2, '0');
     let mins = ((totalMilis/1000)/60).toFixed(0).padStart(2, '0');
     document.getElementById('minutos').textContent = mins;
     document.getElementById('segundos').textContent = secs;
     document.getElementById('milisegundos').textContent = milis;
      

     document

          .getElementById('stop')
          .addEventListener('click', e =>{
               clearInterval(interval);
               running = false;
          })
     document
          .getElementById('start')
          .addEventListener('click', e =>{
               if(!running){
                    interval = setInterval(updateTime, 45);
                    running = true;
               }
          });
     document
          getElementById('reset')
          .addEventListener('click', e =>{
               totalMilis = 0;
          });
}
