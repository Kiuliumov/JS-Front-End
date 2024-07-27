function largestNumber(a, a1, a2){
    let largest;
    if(a > a1 && a > a2){
        largest = a
    }

    else if (a1 > a && a1 > a2){
        largest = a1
    }

    else if (a2 > a && a2 > a1){
        largest = a2
    }

    console.log(`The largest number is ${largest}.`)
}