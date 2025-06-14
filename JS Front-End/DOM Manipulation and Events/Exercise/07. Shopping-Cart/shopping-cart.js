document.addEventListener('DOMContentLoaded', solve);

function solve() {
   const buttons = document.querySelectorAll('.add-product');
   const shoppingCart = {};
   const textarea = document.querySelector('textarea');

   buttons.forEach((b) => b.addEventListener('click', (e) => {
      const productName = e.target.parentNode.parentNode.querySelector('.product-title').textContent;
      const productPrice = e.target.parentNode.parentNode.querySelector('.product-line-price').textContent;
      if(!Object.keys(shoppingCart).includes(productName)){
         shoppingCart[productName] = Number(productPrice);
      } else{
         shoppingCart[productName] += Number(productPrice);
      }
      textarea.textContent += `Added ${productName} for ${Number(productPrice).toFixed(2)} to the cart.\n`;
   }));

   let checkout = document.getElementsByClassName('checkout')[0];

   checkout.addEventListener('click',(e) => {
      textarea.textContent += `You bought ${Object.keys(shoppingCart).join(', ')} for ${Object.values(shoppingCart).reduce((sum, value) => sum + Number(value), 0).toFixed(2)}.`
      checkout.disabled = true;
      buttons.forEach((b) => b.disabled = true);
   })
}
