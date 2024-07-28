function addressBookDisplay(info){
    const addressBook = {};

    for(const addressInfo of info){
        const [name, adress] = addressInfo.split(':');
        addressBook[name] = adress;
    } 

    for(const key of Object.keys(addressBook).sort()){
        console.log(`${key} -> ${addressBook[key]}`)
    }

}
addressBookDisplay(['Tim:Doe Crossing','Bill:Nelson Place','Peter:Carlyle Ave','Bill:Ornery Rd']);
   