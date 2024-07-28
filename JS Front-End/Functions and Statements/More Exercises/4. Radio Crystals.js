function processRadioCrystal(array){


    function radioCrystal(requiredThickness, currentThickness){

        function cut(crystal){
            return crystal / 4;
        }

        function lap(crystal){
            return crystal * 0.8;
        }

        function grind(crystal){
            return crystal - 20;
        }

        function etch(crystal){
            return crystal - 2;
        }

        function xray(crystal){
            return crystal + 1;
        }

        function transportingAndWashing(currentThickness){
            return Math.floor(currentThickness);
            
        }

        function checkIfRequiredThicknessIsReached(currentThickness, requiredThickness){
            if(requiredThickness == currentThickness){
                console.log(`Finished crystal ${currentThickness} microns`);
                return true;
            }
        }



        console.log(`Processing chunk ${currentThickness} microns`);

        let counter = 0;

        while(currentThickness / 4 >= requiredThickness){
            counter += 1;
            currentThickness = cut(currentThickness);
        }
        

        if(counter){
            console.log(`Cut x${counter}`);
            currentThickness = transportingAndWashing(currentThickness);
            console.log('Transporting and washing');
            if(checkIfRequiredThicknessIsReached(currentThickness, requiredThickness)){
                return;
        }
        }
        




        counter = 0;

        while(currentThickness * 0.8 >= requiredThickness){
            counter ++;
            currentThickness = lap(currentThickness);
        }


        if(counter){
            console.log(`Lap x${counter}`);
        currentThickness = transportingAndWashing(currentThickness);
        console.log('Transporting and washing');
        if(checkIfRequiredThicknessIsReached(currentThickness, requiredThickness)){
            return;
        }
        }
        







        counter = 0;

        while(currentThickness - 20 >= requiredThickness){
            counter += 1;
            currentThickness =  grind(currentThickness);
        }
        
        if(counter){
            console.log(`Grind x${counter}`);
            currentThickness = transportingAndWashing(currentThickness);
            console.log('Transporting and washing');
            if(checkIfRequiredThicknessIsReached(currentThickness, requiredThickness)){
                return;
            }
        }
        




        counter = 0;
        while(currentThickness - 2 >= requiredThickness - 1){
            counter += 1;
            currentThickness = etch(currentThickness);
        }

        
        if(counter){
            console.log(`Etch x${counter}`);
        currentThickness = transportingAndWashing(currentThickness);
        console.log('Transporting and washing');

        if(checkIfRequiredThicknessIsReached(currentThickness, requiredThickness)){
            return;
        }
        }
        

        if(currentThickness + 1 == requiredThickness){
            currentThickness = xray(currentThickness);
        console.log('X-ray x1')
        currentThickness = transportingAndWashing(currentThickness, requiredThickness);
        if(checkIfRequiredThicknessIsReached(currentThickness, requiredThickness)){
            return;
        }

        }
        
    }

    for(let i = 1; i < array.length; i++){
        radioCrystal(array[0], array[i]);
    }





    
}