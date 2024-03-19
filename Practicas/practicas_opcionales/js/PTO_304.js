function getUpperCase(arr){
    let mayus = arr.filter(item =>{
        if(item >= 'A' && item <= 'Z'){
            return true;
        }else{
            return false;
        }
    })
    return mayus;
}

console.log(getUpperCase(['aBc', 'BE', 'hfa', 'AEO']));