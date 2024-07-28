function factorielDivison(numberOne, numberTwo){
    function getFactoriel(number){
        if(number == 1){
            return 1;
        }
        return number * getFactoriel(number - 1);
    }
    result = getFactoriel(numberOne) / getFactoriel(numberTwo);
    console.log(result.toFixed(2));
}