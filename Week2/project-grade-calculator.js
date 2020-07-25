'use strict'

        // after using switch i Commented it and used if. which one is better?
let grade= 55;
let scoor = "";
    if (grade >= 90 ){
        scoor= 'You got a A (90% - 100%)'
    }
    
    else if (grade >= 80 ){
        scoor= 'You got a B (80% - 89%)'
    }
        
    else if (grade >= 70 ){
        scoor= 'You got a C (70% - 79%)'
    }
    
    else if (grade >= 60 ){
        scoor= 'You got a D (60% - 69%)'
    }   
    else if (grade >= 50 ){
        scoor= 'You got a E (50% - 59%)'
    }
    else {
        scoor= 'You got a F (0% - 49%)'
    };

    console.log(scoor);



// let grade= 'd' ;
// switch (grade){
//     case 'a':
//         console.log('You got a A (90% - 100%)');
//         break;
    
//     case 'b':
//         console.log('You got a B (80% - 89%)');
//         break;
    
//     case 'c':
//         console.log('You got a C (70% - 79%)');
//         break;
    
//     case 'd':
//         console.log('You got a D (60% - 69%)');
//         break;
    
//     case 'e':
//         console.log('You got a E (50% - 59%)');
//         break;
    
//     case 'f':
//         console.log('Grade F (0% - 49%)');
    
//     console.log(grade)
    
// }










// project-grade-calculator.js