function digitalRoot(a){
    if(a < 10){
        return a
    }else{
        let resultado = 0;
        while(a > 10){
            resultado += a % 10;
            a = Math.floor(a / 10);
           
        }
        return digitalRoot(resultado);
    }
   

   

}

console.log(digitalRoot(16));