function carWash(commands){
    let value = 0;

    for(const command of commands){
        if(command == 'soap'){
            value += 10
        } else if(command == 'water'){
            value *= 1.2;
        } else if(command == 'vacuum cleaner'){
            value *= 1.25;
        } else {
            value *= 0.9;
        }

    }


    console.log(`The car is ${value.toFixed(2)}% clean.`);
}

carWash(["soap", "soap", "vacuum cleaner", "mud", "soap", "water"]);