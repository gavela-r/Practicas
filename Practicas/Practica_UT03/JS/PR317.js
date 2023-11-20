function generateUser(arr){
    arr.forEach(usuario => {
        let numero = (Math.random()*100).toFixed(0).padStart(2, 0);
        let nickname = `${usuario.name[0]}${usuario.username}${numero}`.toLowerCase();
        usuario.nickname=nickname;
    });
    return arr;
}

let arr = [
{   name: 'Victor',
    apellidos: 'Gonzalez',
}]

console.log(generateUser(arr));