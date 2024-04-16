function findNextPower(n, pow){
    let acum = 0;
    while(acum**pow < n){
        acum++;
    }
    return acum**pow;
}

console.log(findNextPower(70, 4));
console.log(findNextPower( 12385, 3 ));
