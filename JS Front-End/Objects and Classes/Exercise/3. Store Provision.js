function storeProvisiont(currentProvisions, orderedStock){
    const storeStock = {};

    for(i = 0; i < currentProvisions.length; i += 2){
        if(i + 1 < currentProvisions.length){
            storeStock[currentProvisions[i]] = Number(currentProvisions[i + 1])
        }
    }

    for(i = 0; i < orderedStock.length; i += 2){

        if(i + 1 < orderedStock.length){


            if(!(orderedStock[i] in storeStock)){
                storeStock[orderedStock[i]] = Number(orderedStock[i + 1]);
            } else {
                storeStock[orderedStock[i]] += Number(orderedStock[i + 1]);
            }
            
        }
    }

    for(key in storeStock){
        console.log(`${key} -> ${storeStock[key]}`);
    }
}

storeProvisiont(['Chips', '5', 'CocaCola', '9', 'Bananas','14', 'Pasta', '4', 'Beer', '2'], ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);