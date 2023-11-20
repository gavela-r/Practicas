function convertBase(str, baseFrom, baseTo){
    return parseInt(str, baseFrom)
            .toString(baseTo);
}
console.log(convertBase('11111', 2, 16));


