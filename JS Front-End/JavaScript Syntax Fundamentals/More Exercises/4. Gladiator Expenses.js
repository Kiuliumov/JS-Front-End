function calculateExpenses(lostGamesCount, helmetPrice, swordPrice, shieldPrice, armorPrice){
    const expenses = (parseInt(lostGamesCount / 2) * helmetPrice) + (parseInt(lostGamesCount/3) * swordPrice) + (parseInt(lostGamesCount/6) * shieldPrice) + (parseInt(lostGamesCount/12) *armorPrice);
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`)
}


calculateExpenses(23, 12.50, 21.50, 40, 200);