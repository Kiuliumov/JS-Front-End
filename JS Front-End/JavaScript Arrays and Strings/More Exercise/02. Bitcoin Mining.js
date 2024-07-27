function bitcoinMining(array){
    const BITCOIN_PRICE = 11949.16;
    const GOLD_PRICE = 67.51;
    let totalAmountOfBitcoin = 0;
    let totalMoney = 0;
    let counter = 0;
    let dayOfTheFirstPuchase;
    let alreadyPurchased = false;

    for (let gold of array) {

        counter += 1;

        if(counter % 3 == 0){
            gold = gold * 0.7;
        }

        totalMoney += gold * GOLD_PRICE;


        if (totalMoney >= BITCOIN_PRICE) {
            const bitcoinsBought = Math.floor(totalMoney / BITCOIN_PRICE);
            totalAmountOfBitcoin += bitcoinsBought;
            totalMoney -= bitcoinsBought * BITCOIN_PRICE;

            if (!alreadyPurchased) {
                dayOfTheFirstPuchase = counter;
                alreadyPurchased = true;
            }
        }


    }

    console.log(`Bought bitcoins: ${totalAmountOfBitcoin}`);
    
    if(dayOfTheFirstPuchase){
        console.log(`Day of the first purchased bitcoin: ${dayOfTheFirstPuchase}`);
    }

    console.log(`Left money: ${totalMoney.toFixed(2)} lv.`);

}  

bitcoinMining([3124.15, 504.212, 2511.124])