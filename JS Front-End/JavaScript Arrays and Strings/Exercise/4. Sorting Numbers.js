function sortedNumbers(array){
    sortedArray = array.sort((a, b) => a - b);
    newArray = []
    let left = 0
    let right = sortedArray.length - 1

    while(left <= right){   
        if (left <= right) {
            newArray.push(sortedArray[left]);
            left++;
        }
        
        if (left <= right) {
            newArray.push(sortedArray[right]);
            right--;
        }
    }
    return newArray;
}


sortedNumbers([1, 5, 6, 7, 2354, 654, 524, 3654, 555]);
