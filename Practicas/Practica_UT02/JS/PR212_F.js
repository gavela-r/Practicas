function isPrime(n){
    if (n <= 1){
        return false;
    }
    if (n == 2){
        return true;
    }
    if (n % 2 == 0){
        return false;
    }
    for(let k = 2; k < Math.sqrt(n); k++){
        if (n % k == 0){
            return false;
        }
    }
    return true;
}

