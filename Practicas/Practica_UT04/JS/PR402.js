let elemt = document.querySelector("#months");
/*let mes = ['',  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Nobiembre', 'Diciembre'];
for(let k = 1; k <= 12; k++){
    elemt.innerHTML += `<div class='month'>
                        <div class='month-number'>${k}</div>  
                        <div class='month-name'>${mes[k]}</div>
                        </div>`;
}*/

let mes2 = "Enero Febrero Marzo Abril Mayo Junio Julio Agosto Septiembre Octubre Nobiembre Diciembre";
let a = mes2.split(" ")
            .forEach( (element, index) => {
                let divMonth = document.createElement('div');
                let divNumber = document.createElement('div');
                let divName = document.createElement('div');

                divMonth.classList.add('month');
                divNumber.classList.add('month-number');
                divName.classList.add('month-name');
                
                divNumber.textContent = index + 1;
                divName.textContent = element;

                divMonth.append(divNumber);
                divMonth.append(divName);
                elemt.append(divMonth);
            });

