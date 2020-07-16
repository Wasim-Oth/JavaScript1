'use strict';

// i am not sure if i understood good what i should do! i am sure there is easier way to do it.
//  i tried to think about function but i couldnt do it. i apprcieat some help here 

let firstName = 'wasim';
let lastName = 'othman';

let info = {number: 65,
            city:'Arnhem'
           };

let moreInfo = {age: 29,
                nationality: 'syrian'
               };

console.log(typeof(firstName));
console.log(typeof(lastName));
console.log(typeof(info));
console.log(typeof(moreInfo));


if (typeof(firstName) == typeof(lastName)){
console.log('same type');
}
else {
    console.log('not the same type')
};

if (typeof(firstName) == typeof(info)){
    console.log('same type');
    }
else {
        console.log('not the same type')
     };

if (typeof(firstName) == typeof(moreInfo)){
    console.log('same type');
        }
else {
        console.log('not the same type')
     };


if (typeof(lastName) == typeof(info)){
     console.log('same type');
     }
else {
      console.log('not the same type')
     };

if (typeof(lastName) == typeof(moreInfo)){
        console.log('same type');
        }
else {
       console.log('not the same type')
     };    

if (typeof(info) == typeof(moreInfo)){
        console.log('same type');
     }
else {
       console.log('not the same type')
     };          

