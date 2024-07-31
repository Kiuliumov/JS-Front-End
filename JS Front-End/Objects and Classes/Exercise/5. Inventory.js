function inventory(array){
    const heroData = [];
    for (const hero of array) {
        const [name, level, inventory] = hero.split(' / ');
        const items = inventory.split(', ');
        const itemsToAdd = items ? items : null;
        heroData.push({name: name, level: Number(level), items: itemsToAdd});
    }

    heroData.sort((a, b) => a.level - b.level);
    
    for(const hero of heroData){
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        if(hero.items){
            console.log(`items => ${hero.items.join(', ')}`);
        }
    }
}

inventory(['Isacc / 25 / Apple, GravityGun', 'Derek / 12 / BarrelVest, DestructionSword', 'Hes / 1 / Desolator, Sentinel, Antara']);