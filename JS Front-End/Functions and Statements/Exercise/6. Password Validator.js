function passwordValidator(password){
    let passwordProt = false;
    if(!(password.length >= 6 && password.length <= 10)){
        console.log('Password must be between 6 and 10 characters');
        passwordProt = true
    } if(!/^[a-zA-Z0-9]+$/.test(password)){
        console.log('Password must consist only of letters and digits')
        passwordProt = true;
    } if((password.match(/\d/g) || []).length < 2){
        console.log('Password must have at least 2 digits');
        passwordProt = true;
    } if(!passwordProt){
        console.log('Password is valid');
    }
}


passwordValidator('Ihavemorethan10charracters')