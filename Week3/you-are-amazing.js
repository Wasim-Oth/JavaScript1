'use strict'

function giveCompliment(name){
    let compliments = ['nice', 'smart', 'funny', 'good', 'lovely', 'amazing', 'great', 'supersmart', 'sweet', 'humble' ];
    let s = compliments[Math.floor(Math.random()*compliments.length)];
    return `You are ${s} ${name}`;
}
giveCompliment('Wasim');


console.log(giveCompliment('wasim'))