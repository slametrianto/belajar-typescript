let names: string[]= ["mamet", "rianto", "reni"];

console.log(names[2]);

let numbers: Array<number> = [1,2,3,4,5];

//mengubah array
numbers[1] = 5;

console.log(numbers[1]);

//tuple
let student: [string,string,number] = ["1001", "eko", 90];

console.log(student[0]);


// menambahkan array

let namesLagi: Array<String> =[];
namesLagi.push("mamet");
namesLagi.push("nur");
console.log(namesLagi);

delete namesLagi[1];
console.log(namesLagi);
