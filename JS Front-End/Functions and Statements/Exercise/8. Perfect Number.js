function isPerfect(number){

    function allPositiveDivisors(n) {
        const divisors = [];

        for(let i = 1; i <= n / 2; i++){

            if(n % i == 0){
                divisors.push(i);
            }

        }

        return divisors;
    }

    function sum(array){
        return array.reduce((a, b) => a + b)
    }

    const divisors = allPositiveDivisors(number);

    if(sum(divisors) == number){
        console.log('We have a perfect number!');
    } else {
        console.log('It\'s not so perfect.');
    }
}

isPerfect(6);