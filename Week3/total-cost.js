'use strict'

let cartForParty = { 
    beers: 5.50,
    chips: 3.25,
    choclate: 2.65,
    cola: 1.95,
    vodka: 15.50
 };

function calculateTotalPrice(str){
let sum = 0;
for ( let i in str){
    sum += str[i];
} 
    return `Total: ${sum}` ;
};

console.log(calculateTotalPrice(cartForParty))