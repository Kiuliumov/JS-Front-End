function phoneBook(information){

    const phoneBook = {};

    for(const info of information){
        const [name, phoneNumber] = info.split(' ');
        phoneBook[name] = phoneNumber
    }


    for(const key of Object.keys(phoneBook)){
        console.log(`${key} -> ${phoneBook[key]}`)
    }
}