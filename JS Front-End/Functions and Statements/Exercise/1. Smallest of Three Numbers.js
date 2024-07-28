function minimumNumber(numberOne, numberTwo, numberThree){
    if(numberOne < numberTwo && numberOne < numberThree){
        return numberOne;
    } else if(numberTwo < numberOne && numberTwo < numberThree) {
        return numberTwo;
    } else {
        return numberThree;
    }
}