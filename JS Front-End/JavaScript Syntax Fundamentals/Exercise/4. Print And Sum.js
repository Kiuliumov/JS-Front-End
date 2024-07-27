function sum(start, end){
    let sum = 0;
    let output = ''

    for(start; start <= end; start++){
        output += start + ' '
        sum += start;
    }
    console.log(output.trim())
    console.log(`Sum: ${sum}`)
}