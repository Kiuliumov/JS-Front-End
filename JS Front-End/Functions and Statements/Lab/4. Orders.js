function calculateTotalPrice(order, quantity){
    let items = {
        'coffee' : 1.50,
        'water': 1.00,
        'coke': 1.40,
        'snacks': 2.00,
    }
    const totalPrice = items[order] * quantity
    return totalPrice.toFixed(2);

}