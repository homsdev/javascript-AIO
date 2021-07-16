function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}
console.info("Example 1");
repeat(5, console.log);

console.info("Example 2");
let labels = [];
repeat(5, (i) => {
  labels.push(`"Unit ${i + 1}"`);
});
console.table(labels);

console.info("Flow Control with high order functions");
function unless(test, then) {
  if (!test) then();
}

repeat(3, (n) =>
  unless(n % 2 == 1, () => {
    console.log(`${n} is even`);
  })
);

console.clear();
console.info("Filtering elements from an array that do not pass a test");
console.table(SCRIPTS);
console.table(SCRIPTS.filter((language) => language.direction === "rtl"));

console.clear();
console.info("Transform an array applying a function all elements");
console.table(
  SCRIPTS.map((language) => {
    let newString = language.name;
    return newString.toUpperCase();
  })
);

console.clear();
console.info(
  "Building a  new value by repeatedly taking a single element from the array and combining it with the current value"
);

const countCaracters = (language) => {
  return language.ranges.reduce((count, [from, to]) => {
    return count + (to - from);
  }, 0);
};

console.log(
  SCRIPTS.reduce((acumulator, current) => {
    return countCaracters(acumulator) < countCaracters(current)
      ? current
      : acumulator;
  })
);

console.info("Excercise Flattening an array of arrays");
const arrOfArr = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 1],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
];

const concatArr = arrOfArr.reduce((newArr, arr) => newArr.concat(arr));
console.log(concatArr);

console.info("Excersise your own loop");

const loop = (value, test, update, body) => {
  for (let i = value; test(i); i = update(i)) {
    body(i);
  }
};

loop(
  1,
  (n) => n <= 5,
  (n) => n + 1,
  console.log
);

console.info("Excercise Everything");
//Every returns true if all elements from the array satisfy the condition
const listOfStrings = ["red", "black", "green", "yellow"];
console.log(
  `All elements of listOfStrings have a lenght >2 ${listOfStrings.every(
    (el) => el.length > 2
  )}`
);
//Some returns true if some element from the array satisfy the condition
console.log(
  `Some elements of listOfStrings match with green ${listOfStrings.some(
    (el) => el === "green"
  )}`
);

const listOfStatus = ["Active", "Active", "Active", "Inactive"];

const isAllActive = (element, index, array) => {
  let isActive = element === "Active" ? true : false;
  console.log(`The element ${element} with index ${index} is ${isActive}`);
  return isActive;
};

console.log(
  listOfStatus.every((element, index, arr) => isAllActive(element, index, arr))
);

console.info("Excersise find writting direction in a given text");

const characterScript = (code) => {
  for (const script of SCRIPTS) {
    flag = script.ranges.some((el) => {
      return code > el[0] && code < el[1] ? true : false;
    });
    if (flag) return script.direction;
  }
};

const countBy = (string, groupByCondition) => {
  let groups = [];
  let groupName;
  for (let c = 0; c < string.length; c++) {
    groupName = groupByCondition(string.charCodeAt(c));
    let groupIndex = groups.findIndex((group) => group.name === groupName);
    if (groupIndex < 0) {
      groups.push({ name: groupName, count: 1 });
    } else {
      groups[groupIndex].count++;
    }
  }
  return groups;
};

let mainDirection = countBy("Heyخير", (text) => characterScript(text)).reduce(
  (max, actual) => {
    return actual.count > max.count ? actual : max;
  }
);

console.log(`Text main direction is ${mainDirection.name}`);
