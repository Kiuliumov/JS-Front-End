function roadRadar(speed, zone){

    if(zone == 'residential'){
        const allowedSpeed = 20
        let status;

        if(speed <= allowedSpeed){
            console.log(`Driving ${speed} km/h in a ${allowedSpeed} zone`)
        
        } else {

            if(speed <= allowedSpeed + 20){
                status = 'speeding'
            } else if(speed <= allowedSpeed + 40){
                status = 'excessive speeding'
            }

            else{
                status = 'reckless driving'
            }
            console.log(`The speed is ${speed - allowedSpeed} km/h faster than the allowed speed of ${allowedSpeed} - ${status}`)

        } 
    }else if(zone == 'city'){
        const allowedSpeed = 50
        let status;

        if(speed <= allowedSpeed){
            console.log(`Driving ${speed} km/h in a ${allowedSpeed} zone`)
        
        } else {

            if(speed <= allowedSpeed + 20){
                status = 'speeding'
            } else if(speed <= allowedSpeed + 40){
                status = 'excessive speeding'
            }

            else{
                status = 'reckless driving'
            }
            console.log(`The speed is ${speed - allowedSpeed} km/h faster than the allowed speed of ${allowedSpeed} - ${status}`)

        } 
    } else if(zone == 'interstate'){
        const allowedSpeed = 90
        let status;

        if(speed <= allowedSpeed){
            console.log(`Driving ${speed} km/h in a ${allowedSpeed} zone`)
        
        } else {

            if(speed <= allowedSpeed + 20){
                status = 'speeding'
            } else if(speed <= allowedSpeed + 40){
                status = 'excessive speeding'
            }
            else{
                status = 'reckless driving'
            }
            console.log(`The speed is ${speed - allowedSpeed} km/h faster than the allowed speed of ${allowedSpeed} - ${status}`)


        }
    } else if(zone == 'motorway'){
        const allowedSpeed = 130
        let status;

        if(speed <= allowedSpeed){
            console.log(`Driving ${speed} km/h in a ${allowedSpeed} zone`)
        
        } else {

            if(speed <= allowedSpeed + 20){
                status = 'speeding'
            } else if(speed <= allowedSpeed + 40){
                status = 'excessive speeding'
            }
            else{
                status = 'reckless driving'
            }
            console.log(`The speed is ${speed - allowedSpeed} km/h faster than the allowed speed of ${allowedSpeed} - ${status}`)


        }
    }
}