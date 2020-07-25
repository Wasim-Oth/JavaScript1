'use strict'

let grade= 93;
let scoor = "";
var percentage = Number(grade/100).toLocaleString(undefined,{style: 'percent'}); 
    if (grade >= 90 ){
        scoor= 'You got a A ' + (percentage);
    }
    
    else if (grade >= 80 ){
        scoor= 'You got a B ' + (percentage);
    }
        
    else if (grade >= 70 ){
        scoor= 'You got a C ' + (percentage);
    }
    
    else if (grade >= 60 ){
        scoor= 'You got a D ' + (percentage);
    }   
    else if (grade >= 50 ){
        scoor= 'You got a E ' + (percentage);
    }
    else {
        scoor= 'You got a F ' + (percentage);
    };

    console.log(scoor);
