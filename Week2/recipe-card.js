'use strict'

let food= {};
food = {MealName: 'maklobe' ,
        servings: 2 ,
        ingredients: ['half kilo Aubergine', '1 glas rice', 'half kilo chopped meat', '1 magi' ] 
       };

       for (let i in food){
        console.log(`${i}; ${food[i]}`);
