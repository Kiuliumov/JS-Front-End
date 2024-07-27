function multiplicationTable(number){
    output = ''
    for(i = 1; i <= 10; i++){
        output += `${number} X ${i} = ${number * i}\n`
    }

    console.log(output.trim())
}