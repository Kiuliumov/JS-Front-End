function area(r){
    if(typeof(r) !== 'number'){
        console.log(`We can not calculate the circle area, because we receive a ${typeof(r)}.`)
    }

    else{
        let result = Math.PI * r * r
        console.log(result.toFixed(2))
    }
}