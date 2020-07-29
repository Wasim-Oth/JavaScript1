'use strict'

function getScoor(grade){
let percentage = Number(grade/100).toLocaleString(undefined,{style: 'percent'});   // to change the number to percentage
    if (grade >= 90 ){
        return 'You got a A ' + (percentage);
    }
    
    else if (grade >= 80 ){
        return 'You got a B ' + (percentage);
    }
        
    else if (grade >= 70 ){
        return 'You got a C ' + (percentage);
    }
    
    else if (grade >= 60 ){
        return 'You got a D ' + (percentage);
    }   
    else if (grade >= 50 ){
        return 'You got a E ' + (percentage);
    }
    else {
        return 'You got a F ' + (percentage);
    };
};

    console.log(getScoor(67));

// let grade= 93;
// let scoor = "";    //content the grade with percentage
// let percentage = Number(grade/100).toLocaleString(undefined,{style: 'percent'});   // to change the number to percentage
//     if (grade >= 90 ){
//         scoor= 'You got a A ' + (percentage);
//     }
    
//     else if (grade >= 80 ){
//         scoor= 'You got a B ' + (percentage);
//     }
        
//     else if (grade >= 70 ){
//         scoor= 'You got a C ' + (percentage);
//     }
    
//     else if (grade >= 60 ){
//         scoor= 'You got a D ' + (percentage);
//     }   
//     else if (grade >= 50 ){
//         scoor= 'You got a E ' + (percentage);
//     }
//     else {
//         scoor= 'You got a F ' + (percentage);
//     };

//     console.log(scoor);
