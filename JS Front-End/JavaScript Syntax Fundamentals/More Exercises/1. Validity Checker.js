function isValid(x1, y1, x2, y2){
    
    function compareToZero(x, y){
    
        if (isInteger(Math.sqrt(((x) ** 2) + ((y)) ** 2))){
            console.log(`{${x}, ${y}} to {0, 0} is valid`)
        } else{
            console.log(`{${x}, ${y}} to {0, 0} is invalid`)
        }
    }
    
    function isInteger(num) {
        return Math.floor(num) === num;
    }
   


    compareToZero(x1, y1);
    compareToZero(x2, y2);

    if (isInteger(Math.sqrt(((x1 - x2) ** 2) + ((y1 - y2)) ** 2))){
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`)
    } else{
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`)
    }
}



isValid(3, 0, 0, 4)