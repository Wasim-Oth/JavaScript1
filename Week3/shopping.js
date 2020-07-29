'use strict'

let shoppingCart = ['bananas', 'milk'];
let addToShoppingCart = (str) => {
  shoppingCart.push(str);
  if (shoppingCart.length > 3) {
    shoppingCart.shift();
  }
  return `You bought ${shoppingCart}!`;
};
console.log(addToShoppingCart('chocolate')); 
console.log(addToShoppingCart('waffles')); 
console.log(addToShoppingCart('tea')); 