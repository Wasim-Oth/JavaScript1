'use strict';


                    //  i dont think this is the right way! and i feel frustrated cus i cant't do this easy tasks!

let drinkTray= [];
const drinkTypes = ['cola', 'lemonade', 'water'];



let rows = drinkTypes.length;
for (let i=0; i < rows; i++){
    drinkTray.push(drinkTypes[i]);
    
    if (drinkTypes[i]== 'cola'){
        drinkTray.push('cola');
    }
    if (drinkTypes[i]== 'lemonade'){
        drinkTray.push('lemonade');
    }
}
console.log('Hey guys, I brought a' +' '+ drinkTray);