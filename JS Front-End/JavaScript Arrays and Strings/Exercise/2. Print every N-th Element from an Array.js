function printEveryNthElementFromAnArray(array, n){

    for(i = 0; i < array.length; i+=n){
        console.log(array[i]);
    }
    return [];
}

printEveryNthElementFromAnArray([5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 5)