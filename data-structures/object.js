const object = {
  work: "Went to work",
  "touched tree": "Touched a tree",
};

//Access object properties
console.log(`Object.property : ${object.work}`);
console.log(`Object["property"] : ${object["touched tree"]}`);
//Delete object propertie
console.log(
  `Delete Object.property : ${delete object["touched tree"]} -> ${
    object["touched tree"]
  }`
);
console.log(`propertyName in Object ${"touched tree" in object}`);
//Object.key()
console.log(
  `Object.keys(objName) gives object properties -> ${Object.keys(object)}`
);
//Object.assign(a,b) copies all properties from one object to another
let objA = { a: 1, b: 2 };
let objB = { b: 3, c: 4 };
console.log(
  `Object.assign(objA,objB) copy object properties -> ${Object.assign(
    objA,
    objB
  )} then ${JSON.stringify(objA)}`
);
