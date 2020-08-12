'use strict'


// 1-  check if its 16 characters

function validateCreditNumber(num){
    let resualt= true;

    if ( num.length !== 16){
        console.log(`Invalid! The input ${num} should be 16 characters`)
        resualt= false;
    }
    

//  2-  check if all characters are numbers

if (isNaN(num)){
    console.log(`Invalid! The input ${num} should content only numbers`)
    resualt= false;
}



// 3- check if there is only one type of number

let firstNum = num[0];         // first index in the argument
let L;                         // will hold the loop
for ( let i = 0; i < num.length; i++){
     L = num[i];
 };

    if (firstNum == L){
        return`Invalid! The input ${num} should contain at least 2 different types of numbers!`
        resualt= false;
    };


    // 4- check if the e last number is even
    let lastIndex = num.slice(-1);
    if (lastIndex % 2 == 1){
        return `Invalid! The input ${num} should contain an odd number as last index!`
        resualt= false;
    };


    //  5- check if the sum of all the numbers must be greater than 16
    let sumNum = 0;
    for ( let i in num ){
        sumNum +=parseInt(num[i]);
    };
    if (sumNum <= 16){
        return `Invalid! The sum of ${num} should be greater than 16!`
        resualt= false;
    }

    
    

// if all the conditions are true then the value of this variable is true and it will print this message
if (resualt === true){
    return `Success! The input ${num} is a valid credit card number!`
}

};


validateCreditNumber('1234567890123456');       //Success! The input 1234567890123456 is a valid credit card number!
validateCreditNumber('123456789012345688');     //Invalid! The input 123456789012345688 should be 16 characters
validateCreditNumber('a1234567890123456');      //Invalid! The input a12345678901234568 should content only numbers
validateCreditNumber('2222222222222222');       //Invalid! The input 2222222222222222 should contain at least 2 different types of numbers!
validateCreditNumber('1111111111111113');       //Invalid! The input 1111111111111113 should contain an odd number as last index!
validateCreditNumber('1110000000001114');          //Invalid! The sum of 1110000000001114 should be greater than 16!

