//Variables Scope!
let x = 10;
if (true) {
  let y = 20;
  var z = 30;
  console.log(`This block is executed inside the function ${x + y + z}`);
}

console.log(
  `This block is executed outside the function where Y is not defined and X + Z  is ${
    x + z
  } `
);

//When there is multiple variable swith the same name code only see the innermost one
const halve = function (n) {
  return n / 2;
};
let n = 10;
console.log(`This is a local N ${halve(100)}`);
console.log(`This is global N ${n}`);

//Functions are not part of the regular top-to-bottom flow of control
console.log(future());
function future() {
  return `You will never have flying cars :C`;
}

//Arrow Functions
const power = (base, exponent) => {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
};

//Inmediately Invoked function Expression
(function name(params) {
  let num =3;
  console.log(num);
})();

console.log(`Arrow function test : ${power(2, 8)}`);

//The call stack
function chicken() {
  return egg();
}

function egg(params) {
  return chicken();
}
// console.log(`${chicken()} come first`);

//Optional parameters

function minus(a, b) {
  if (b === undefined) return -a;
  else return a - b;
}

console.log(`One parameter ${minus(4)}`);
console.log(`Two parameters ${minus(10, 5)}`);

//Replacing an argument when it is not defined
function powerN(base, exponent = 2) {
  return Math.pow(base, exponent);
}

console.log(`One parameter ${powerN(4)}`);
console.log(`Two parameters ${powerN(2, 8)}`);

//Closure
function wrapValue(n) {
  let local = n;
  return () => local;
}

let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);

console.log(wrap1());
console.log(wrap2());

function multiplier(factor) {
  return (number) => number * factor;
}

let twice = multiplier(2);
console.log(`Call to twice function ${twice(5)}`);

//Recursive functions
function powerR(base, exponent) {
  if (exponent == 0) {
    return 1;
  } else {
    return base * power(base, exponent - 1);
  }
}

console.log(`Test recursive power ${powerR(2, 8)}`);

//Interesting Excersises!
///////////////////////////
console.info(`Zero Pad function`);

const zeroPad = (number, width) => {
  let string = String(number);
  while (string.length < width) {
    string = 0 + string;
  }
  return string;
};
console.log(`zeroPad result : ${zeroPad(1, 3)}`);

///////////////////////////
console.info(`Excersise Minimum function`);
const getMin = (a, b) => {
  return Math.min(a, b);
};
console.log(`The minimum value between ${5} and ${30} is : ${getMin(30, 5)}`);

///////////////////////////
console.info(`Excersise Even or Odd `);
const isEven = (number) => {
  if (number < -1) number = -number;
  if (number === 0) return `is even`;
  if (number < 0) return `is Odd`;
  else return isEven(number - 2);
};
console.log(`${isEven(0)}`);

/////////////////////////////////////////////////////////////////////
console.info(`Bean counter`);

const countBs = (text) => {
  return `There are ${countChar(text, "B")} B´s in ${text}`;
};

const countChar = (text, char) => {
  let counter = 0;
  for (let index = 0; index < text.length; index++) {
    if (text[index] === char) counter++;
  }
  return counter;
};

console.log(countBs("Bleecker Street Balcony"));
/////////////////////////////////////////////////////////////////////
