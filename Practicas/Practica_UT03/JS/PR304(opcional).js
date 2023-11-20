let array = ['aBc', 'BE', 'hfa', 'AEO'];

function getUpperCase(arr){
    let array2 = arr.filter(item =>{
        if(item >= 'A' && item <= 'Z'){
            return true;
        }else{
            return false;
        }
    })
    return array2
}
    

console.log(getUpperCase(array));