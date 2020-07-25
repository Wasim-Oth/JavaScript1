'use strict';

       // is it not possible to use (.slice()) after books.[i]? i tried and it didn't work. i couldn't find another way to to hide the alreadyRead proporty!  

let books = [
    {
        title: ' the subtle art of not giving a fuck',
        author: 'Mark Manson',
        alreadyRead: true,
    },
    {
        title: 'war and peace',
        author: 'Leo Tolstoy',
        alreadyRead: false,
    },
    {
        title: 'the alchemist',
        author: 'Paulo Coelho',
        alreadyRead: false,
    }
];



for (let i=0; i< books.length; i++){
    console.log (books[i]); 
    if (books[i].alreadyRead == false){
        console.log(' I still need to read ' +  books[i].title)
    }
    else{
        console.log('I already read' + books[i].title)
    }
};