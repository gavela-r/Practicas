function arraydiff(a, b){
    return a.filter(index=>
        !b.includes(index)
    )

}   

console.log(arraydiff([1,2], [1]));
console.log(arraydiff([1,2,3], [1,2]));