let correo = document.getElementById('correo');
let contraseña = document.getElementById('contraseña');
let repetir = document.getElementById('repetir');
let formulario = document.getElementById('form');
let error = document.getElementById('error');


correo.addEventListener('blur', e =>{
    // correo valido
    if (!correo.value.includes('@') && !correo.value.includes('.')){
        error.textContent = "el correo no es valido";
    
    }

});


contraseña.addEventListener('keydown', e =>{
    // contraseña valida
    let pass = contraseña.value
    let dif = 0;
    const letters = 'abcdefghijklmnñopqrstuvwxyz';
    const numbers = '0123456789';
    //Comprobar Digito
    let hasMinus = pass
                    .split("")
                    .reduce((acum, letter) =>{
                        acum = acum || letters.includes(letter)
                    }, false);
    if(hasMinus){
        dif += 1;
    }

    let hasMayus = pass
                    .split("")
                    .reduce((acum, letter)=>{
                        acum = acum || letters.toUpperCase().includes(letter)
                    }, false);
    if(hasMayus){
        dif += 1;
    }

    let hasDigit = pass
                    .split("")
                    .reduce((acum, letter) =>{
                        acum = acum || numbers.includes(letter);
                    }, false);
    
    if(hasDigit){
        dif += 1;
    }

    let hasSymbol = pass
                    .split("")
                    .reduce((acum, letter)=>{
                        let isSymbol = !numbers.includes(letter) && !letters.includes(letter.toLowerCase())
                        return acum || isSymbol
                    }, false);
    if(hasSymbol){
        dif += 1;
    }               

    //Incrementar sugun dificultad
    dif += Math.ceil(pass.length/3);
    console.log(`Dificultad:${dif}`);
    console.log(`Dificultad: ${dif}`);

    let msg = dif < 4 ? 'Muy facil':
            dif < 6 ? 'Facil':
            dif < 8 ? 'Aceptable':
            'Segura';
    error.textContent = msg;

});

repetir.addEventListener('blur', e =>{
    //Enviar formulario
    if (contraseña.value != repetir.value){
        error.textContent = "la contraseña no es igual";
    }
});

formulario.addEventListener('submit', e =>{
    e.preventDefault();
    console.log(`correo: ${correo.value}`);
    console.log(`contraseña: ${contraseña.value}`);
})