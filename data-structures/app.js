console.clear();
console.info("Excercise Sum of a range page 79");

const range = (start, end, step = 1) => {
  let newArr = [];
  for (let i = start; i <= end; i += step) {
    newArr.push(i);
  }
  return newArr;
};

const sum = (arrToSum) => {
  let result = 0;
  for (const number of arrToSum) {
    result += number;
  }
  return result;
};

console.table(range(1, 10));
console.log(sum(range(1, 10)));
console.table(range(1, 10, 2));

console.info("Excersise reversing an array page 79");

//Another way to reverse an array
const reverseArr = (array) => {
  let newArr = [];
  for (const cell of array) {
    newArr.unshift(cell);
  }
  return newArr;
};

//Another way to reverse an array
const reverseArray = (arrToReverse) => {
  let reversedArr = [];
  for (let i = arrToReverse.length; i > 0; i--) {
    reversedArr.push(i);
  }
  return reversedArr;
};

//Another wat to reverse an array
function reverseArrayInPlace(array) {
  let oldArray = array;
  let oldArrayCount = oldArray.length;

  for (var i = 0; i < array.length / 2; i++) {
    array.push(array[oldArrayCount - i - 1]);
  }
  for (var j = 0; j < oldArrayCount; j++) {
    array.shift(array[j]);
  }
  return array;
}

console.table(reverseArr(range(1, 10)));
console.log(`Another way to reverse an array`);
console.table(reverseArrayInPlace(range(1, 10)));

console.clear();
console.info("Excercise array to list page 80");

const convertArrToList = (arr) => {
  let start = {};
  let aux;
  for (let i = 0; i < arr.length; i++) {
    if (i == 0) {
      start.value = arr[0];
      start.next = null;
      aux = start;
    } else {
      let node = {};
      node.value = arr[i];
      node.next = null;
      aux.next = node;
      aux = node;
    }
  }
  return start;
};
console.log(convertArrToList(range(1, 5)));

console.clear();

console.info("Equals function Excersise page 81");

const deepEqual = (obj1, obj2) => {
  let counter = 0;
  let isEqual = false;
  if (typeof obj1 === typeof obj2 && obj1 != null && obj2 != null) {
    if (Object.keys(obj1).length == Object.keys(obj2).length) {
      for (const key of Object.keys(obj1)) {
        if (obj1[key] == obj2[key]) counter++;
      }
      isEqual = Object.keys(obj1).length === counter ? true : false;
      return isEqual;
    } else {
      return isEqual;
    }
  } else {
    return isEqual;
  }
};

const a = {
  name: "HomS",
  age: 25,
};

const b = {
  name: "Ivy",
  age: 25,
};

console.log(deepEqual(a, null));
