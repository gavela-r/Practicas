function getUpperCase(arr){
    let array = arr.filter(arr =>{
        if(arr == arr.toUpperCase()){
            return true;
        }else{
            return false;
        }
    })
    return array;

    // return arr.filter(str => str == str.toUpperCase())
}

console.log(getUpperCase(['aBc', 'BE', 'hfa', 'AEo', 'AA']));