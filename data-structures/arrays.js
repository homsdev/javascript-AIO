//Arrays
let emptyArray = [];
let listOfNumber = [1, 2, 3, 4, 5, 6, 7, 8];
let listOfString = ["Hello", "World", "!!!"];
let listOfBoolean = [true, false, false, true];

//Get lenght of an array
console.log(`${listOfNumber.length}`);

//is Array-> Return true if a variable is an array
console.log(`listOfNumber is an array? ${Array.isArray(listOfNumber)}`);

//shift()-> Delete first element of an array and return the value
console.log(
  `Original Array ${listOfNumber} -> shift method applied ${listOfNumber.shift()} and array is now ${listOfNumber}`
);
//pop()-> Delete last element of an array and return the value
console.log(
  `Original Array ${listOfNumber} -> pop method applied ${listOfNumber.pop()} and array is now ${listOfNumber}`
);

//push(n)-> Add element to array end and return new length
console.log(`
Original array is ${listOfNumber} -> push(8) method applied length is ${listOfNumber.push(
  8
)} and array is ${listOfNumber}
`);
//unshift(n)-> Add element to array begin and return new length
console.log(`
Original array is ${listOfNumber} -> unshift(1) method applied length is ${listOfNumber.unshift(
  1
)} and array is ${listOfNumber}
`);
//indexOf(n)-> Return first coincidence index or -1
console.log(`indexOf(24) is ${listOfNumber.indexOf(24)}`);
//lastIndexOf(n)-> Return the last coincidence index or -1
console.log(`lastIndexOf(24) is ${listOfNumber.lastIndexOf(24)}`);
//reverse()-> Invert the current array
console.log(`reverse() ${listOfNumber.reverse()} from array ${listOfNumber}`);
//join(char)-> return a string delimited by the designed char
console.log(`join(|) ${listOfNumber.join("|")} from array ${listOfNumber}`);
//splice(a)-> cut the array from the given position to the end and returns values AFFECTs original array
listOfNumber = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(`splice(a) ${listOfNumber.splice(4)} from array ${listOfNumber}`);
//splice(a,b)-> cut the array from the given position a to b and returns values AFFECTs original array
listOfNumber = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(`splice(a,b) ${listOfNumber.splice(4,2)} from array ${listOfNumber}`);
//splice(a,b,items)-> cut the array from the given position a to b and insert given values
listOfNumber = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(`splice(a,b,items) ${listOfNumber.splice(4,2,["A","B"])} from array ${listOfNumber}`);
//splice(a,0,items)-> Insert [items] from position a into array and return emtpy array 
listOfNumber = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(`splice(a,0,items) ${listOfNumber.splice(4,0,["A","B"])} from array ${listOfNumber}`);
//slice(a)-> return copy array from the selected position a
listOfNumber = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(`slice(a) ${listOfNumber.slice(4)} from array ${listOfNumber}`); 
//slice(a,b)-> return copy array from the selected position a to b
listOfNumber = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(`slice(a,b) ${listOfNumber.slice(4,2)} from array ${listOfNumber}`); 
//slice()-> return copy array 
listOfNumber = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(`slice() ${listOfNumber.slice()} from array ${listOfNumber}`); 

