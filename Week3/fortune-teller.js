'use strict'

let numChildren = [3, 4, 1, 6, 2];
let partnerNames = ['ali', 'noer', 'sami', 'leo', 'rag'];
let locations  = ['Netherlands', 'france', 'italy', 'dubi', 'spain'];
let jobs = ['developer', 'driver', 'painter', 'teacher ', 'actor'];

function tellFortune(num, str1, str2, str3){
        num  = numChildren[Math.floor(Math.random()*numChildren.length)];
        str1 = partnerNames[Math.floor(Math.random()*partnerNames.length)];
        str2 = locations[Math.floor(Math.random()*locations.length)];
        str3 = jobs[Math.floor(Math.random()*jobs.length)];

      return `You will be a ${str3} in ${str2}, married to ${str1} with ${num} kids.`

};


console.log(tellFortune()); 
console.log(tellFortune()); 
console.log(tellFortune());




