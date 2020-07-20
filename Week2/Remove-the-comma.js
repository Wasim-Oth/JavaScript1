let myString = 'hello,this,is,a,difficult,to,read,sentence';
console.log(myString.length);

console.log(myString.indexOf(','));
myString= myString.replace(/,/g,  " ");

console.log(myString);
