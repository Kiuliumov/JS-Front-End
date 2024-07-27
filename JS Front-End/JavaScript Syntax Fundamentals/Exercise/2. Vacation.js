function getPrice(groupSize, groupType, dayOfTheWeek){
    let totalPrice;

    if (groupType == 'Students'){
        
        if(dayOfTheWeek == 'Friday'){
            totalPrice = 8.45;
        }

        else if(dayOfTheWeek == 'Saturday'){
            totalPrice = 9.80;
        }

        else{
            totalPrice = 10.46;
        }

        if(groupSize >= 30){
            totalPrice *= 0.85;
        }

        totalPrice *= groupSize;

    }

    else if (groupType == 'Business'){
        
        if(dayOfTheWeek == 'Friday'){
            totalPrice = 10.90;
        }

        else if(dayOfTheWeek == 'Saturday'){
            totalPrice = 15.60;
        }

        else{
            totalPrice = 16;
        }


        if(groupSize >= 100){
            groupSize -= 10
        }

        totalPrice *= groupSize;
    }

    else{
        
        if(dayOfTheWeek == 'Friday'){
            totalPrice = 15;
        }

        else if(dayOfTheWeek == 'Saturday'){
            totalPrice = 20;
        }

        else{
            totalPrice = 22.50;
        }

        if(groupSize >= 10 && groupSize <= 20){
            totalPrice *= 0.95;
        }

        totalPrice *= groupSize;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`)
}
