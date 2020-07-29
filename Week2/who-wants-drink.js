'use strict';

let drinkTray= [];
const drinkTypes = ['cola', 'lemonade', 'water' ];

let rows = drinkTypes.length;
for (let i=0; i < rows; i++){
    drinkTray.push(drinkTypes[i]);
    drinkTray.push(drinkTypes[i]);
    if (i === rows-1){
        drinkTray.pop();
    }
  
console.log(`Hey guys, I brought a ${drinkTray}`);



// for (let i=0; i < rows; i++){
//     drinkTray.push(drinkTypes[i]);
    
//     if (drinkTypes[i]== 'cola'){
//         drinkTray.push('cola');
//     }
//     if (drinkTypes[i]== 'lemonade'){
//         drinkTray.push('lemonade');
//     }
// }
// console.log('Hey guys, I brought a' +' '+ drinkTray);
