
/*let count = 0;
for (let i = 0; i < animals.length; i++) {
    count++
}
console.log(count);


animals.forEach(function(animal) {
    console.log(animal);
});*/

//Use a while loop to count animals whose names have five or more letters.
/*const animals = ['lion', 'tiger', 'bear', 'giraffe', 'zebra', 'monkey']
let i=0;
while(i<animals.length){
    let charCount = 0;
    for (let a=0; a<animals[i].length; a++){
        charCount++;
    }
    if(charCount>=5){
    console.log(animals[i],charCount)};

    i++;
}*/

//Use a do...while loop to count animals until you encounter an animal whose name starts with 'm'
/*const animals = ['lion', 'tiger', 'bear', '','giraffe', 'zebra', 'smonkey']
let m=0;
do{
   //let i=0;
   m++;
console.log(animals[m-1]);
}while(animals[m][0]!='m'&&animals[m]&&m<animals.length);
console.log(m)*/

/*1. Declare a function named getDayName that takes a number (0-6) 
as a parameter and returns the name of the day.
2. Use a switch statement to determine the day name.
Call the function with the argument 3, store the result in a variable, 
and output it to the console.*/

console.log('5'>=5)

const book = {
    title: "Titel",
    author: 'the author of the book.',
    pages: 256,
    isRead: true,
    summary(){
                console.log(`Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}, Read: ${this.isRead?'Yes':'No'}`)
                },
}
book.summary()

const obj1 = {
  name: "Объект 1",
  init: function () {say: () => { console.log(this.name) }} // this здесь ссылается на то, что было снаружи
};

const obj2 = { name: "Объект 2", say: obj1.say }; 

obj1.say(); // Выведет то же самое, что и снаружи (например, window.name)
obj2.say(); // Опять выведет то же самое! Она не переключилась на obj2.