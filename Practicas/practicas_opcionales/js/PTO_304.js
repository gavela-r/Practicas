function getUpperCase(arr){
    return arr.filter(str => str == str.toUpperCase() )
}

console.log(getUpperCase(['aBc', 'BE', 'hfa', 'AEo']));