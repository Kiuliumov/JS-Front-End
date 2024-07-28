function loadingBar(percentage){
    let output;

    if(percentage < 100){
        output = `${percentage}% [${'%'.repeat(percentage/10)}${'.'.repeat(10 - (percentage/10))}]\n`
        output += 'Still loading...';
    } else {
        output = '100% Complete\n';
        output += '[%%%%%%%%%%]';
    }

    console.log(output);

}