function arraydiff(a, b){
    return a.filter(elemento=>
        !b.includes(elemento)
    )

}   
//arraydiff = (a,b) => a.filter(e=> !b.includes(e)) 

console.log(arraydiff([1,2], [1]));
console.log(arraydiff([1,2,3], [1,2]));