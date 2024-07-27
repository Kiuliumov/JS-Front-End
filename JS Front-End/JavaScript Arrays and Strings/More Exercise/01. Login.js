function validatePassword(array){
    let username = array[0]
    let currentAttempt = 0;

    for(const password of array.slice(1,array.length)){
        currentAttempt += 1;
        
        if(password == username.split('').reverse().join('')){
            console.log(`User ${username} logged in.`);
        } else {
            
            if(currentAttempt == 4){
                console.log(`User ${username} blocked!`);
            } else{
                console.log('Incorrect password. Try again.');
            }
        }
    }
}


