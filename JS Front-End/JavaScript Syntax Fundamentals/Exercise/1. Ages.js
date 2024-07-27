function determinePersonType(age) {
    let personType;
    
    if (age < 0){
        personType = 'out of bounds'
    }

    else if(age < 3){
        personType = 'baby'
    }

    else if(age < 14){
        personType = 'child'
    }

    else if(age < 20){
        personType = 'teenager'
    }

    else if(age < 66){
        personType = 'adult'
    }

    else if(age >= 66){
        personType = 'elder'
    }

    console.log(personType)
}