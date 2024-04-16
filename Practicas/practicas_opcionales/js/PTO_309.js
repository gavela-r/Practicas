function digitalRoot(a){
    if(a <= 9){
        return a;
    }else{
        let res = 0;
        while(a >= 10){
            res += a % 10;
            a = Math.floor(a / 10);
        }
        res += a;
        return digitalRoot(res);
    }

}

console.log(digitalRoot(16));