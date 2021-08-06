//Create new Set
const set1 = new Set();
//Add new value to set
set1.add(1);
set1.add("Charlie");
set1.add(2);
set1.add({ name: "Max", power: "Time travel" });
//Check wether exist
console.info("Check wether or not the value exists");
console.log(set1.has(2));
//Delete an item from set
console.info("Deleting set value");
console.table(set1);
set1.delete(2);
console.table(set1);
//Get Set size
console.info("Getting set size");
console.log(set1.size);

//Iterating a set
console.info("Iterating a Set");
set1.forEach((value) => console.log(value));
