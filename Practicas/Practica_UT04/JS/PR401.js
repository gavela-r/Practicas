let elemt = document.getElementById('numbers');
/*for(let k = 1; k <= 30; k++){
    numbers.innerHTML += `<span class="number">${k}</span>`;
}*/

for (let k = 1; k <= 30;k++){
    let numeros = document.createElement('span');
    numeros.className = "number";
    numeros.textContent = k;
    elemt.append(numeros);

}
console.log(elemt.innerHTML);