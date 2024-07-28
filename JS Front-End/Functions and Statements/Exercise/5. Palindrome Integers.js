function isPalindrome(numbers){
    for(number of numbers){
        stringNumber = String(number);
        let left = 0;
        let right = stringNumber.length - 1;

        while(true){
            if(left < right){
                if(stringNumber[left] !== stringNumber[right]){
                    console.log('false');
                    break;
                } else {
                    left += 1;
                    right -= 1;
                }
            } else {
                console.log('true');
                break;
            }
        }
    }
}


