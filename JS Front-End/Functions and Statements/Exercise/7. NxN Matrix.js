function printMatrix(n){
    let matrix = [];
    for(let i = 0; i < n; i++){
        matrix.push([])
        for(let j = 0; j < n; j++){
            matrix[i].push(n);
        }
    }
    output = '';

    for(let i = 0; i < n; i++){
        if(i > 0){
            output += '\n'
        }
        for(let j = 0; j < n; j++){
            output += matrix[i][j] + ' ';
        }
        output.trim();
    }

    console.log(output);

}

printMatrix(5)