function cookByNumbers(number, command1, command2, command3, command4, command5){
    number = Number(number);
    commands = [command1, command2, command3, command4, command5]

    commands.forEach(command => {

        if(command == 'chop'){
            number /= 2;
            console.log(number);

        } else if(command == 'dice'){
            number = Math.sqrt(number);
            console.log(number);

        } else if(command == 'spice'){
            number += 1;
            console.log(number);
        }

        else if(command == 'bake'){
            number *= 3;
            console.log(number);
        }

        else{
            number *= 0.8;
            console.log(number)
        }
    });
}

cookByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');