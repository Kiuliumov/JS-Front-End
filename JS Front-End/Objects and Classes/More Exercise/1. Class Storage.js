class Storage{

    constructor(capactiy){
        this.capacity = capactiy;
        this.storage = [];
        this.totalCost = 0;
    }

    addProduct(object){
        if(this.capacity < object.quantity){
            return;
        }
        this.storage.push(object);
        this.totalCost += object.price * object.quantity; 
        this.capacity -= object.quantity;
    }

    getProducts(){
        let allProducts = ''
        for(const object of this.storage){
            allProducts += JSON.stringify(object) + '\n';
        }
        return allProducts.trim();
    }

}
