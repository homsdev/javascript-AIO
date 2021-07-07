let variable;
//Undefined for created variables without value
console.log(typeof variable);

//Boolean logical datatype that only has two values
variable = true;
console.log(typeof variable);
//Number
variable = 24;
console.log(typeof variable);
//String
variable = "Hello World";
console.log(typeof variable);
variable = "Hello \n world";
console.log(variable);
variable = "Hello \\ World";
console.log(variable);
//NaN Not a Number used when an operation does not have a meaningful result
variable = NaN;
console.log(typeof variable);

//Automatic type conversion
console.log(8 * null); //-> 0
console.log("5" - 1); //-> 4
console.log("5" + 1); //-> 51
console.log("five" * 2); //-> Nan
console.log(false == 0); //-> true
console.log(8 + null); //-> 8
console.log(null == undefined); //-> true
console.log(null == 0); //-> false

//Operators to not making auto type conversion
console.log(`Is 0 === false ? ${0 === false}`); //->false
console.log(`Is 0 !== false ? ${0 !== false}`); //->true

/*
    Short-circuit evaluation && or ||
*/
//Convertion in logical operators
console.log(`The value is ${null || "user"}`); //->When the value on their left can be converted to True returns that value
console.log(`The value is ${"Magda" || "Martin"}`);
console.log(`Empty string returns false ${"" || "!?"}`);
console.log(`Zero value returns false ${0 || -1}`);
console.log(`Nan value returns false ${NaN || "Nani!?"}`);
//But when they are on the right side...
console.log(`What hapen if... ${null || 0}`);
console.log(`What hapen if... ${null || ""}`);
console.log(`What hapen if... ${0 || 0}`);
console.log(`What hapen if... ${"" || ""}`);

console.log(`null && 0... ${null && 0}`); //If the value on the left is something that converts to False returns that value
console.log(`String && String ${"Magda" && "Martin"}`);
console.log(`Empty string && String ${"" && "!?"}`);
console.log(`0 && -1 ${0 && -1}`);
