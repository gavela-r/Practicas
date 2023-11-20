function sumOMults(k, n){
    let res;
    for (let i = 1; i <= n; i++){
        res = k * i;
    }
    return res;
}

console.log(sumOMults(3, 5));