function reverseArrayOfNumbers(n, array){
    const newArray = array.slice(0, n)
    let reversedArray = newArray.reduce((acc, curr) => [curr, ...acc], []);
    console.log(reversedArray.join(' '))
}