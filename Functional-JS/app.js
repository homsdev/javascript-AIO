const schools = ["Yorktown", "Washington & Liberty", "Wakefield"];
console.info("Extracting a delimited string from array with array.join()");
console.log(schools.join(","));

console.info("New array with all schools that began with W");
const schoolsW = schools.filter((school) => school.charAt(0) === "W");
console.log(schoolsW);

console.info("New Array without Washington & Liberty School using filter");
const popFromSchools = (schoolName, schoolArr) => {
  return schoolArr.filter((school) => school !== schoolName);
};
console.log(popFromSchools("Washington & Liberty", schools));

// Array map to concatenate a new string into each element
console.info("Using Array map to add 'HighSchool' to schools list");
const highschoolsArr = schools.map((school) => `${school} High School`);
console.log(highschoolsArr.join("\n"));

//Array map to convert an string array into an object array
console.info("Using Array.map to convert array to object");
const schoolObjArr = schools.map((school) => ({
  name: school,
  students: 130,
}));
console.log(schoolObjArr);

//Array map to change one school name
console.info("Using Array.map to replace a Wakefield with Stratford");
const updateSchoolName = (oldName, newName, arr) => {
  return arr.map((school) => {
    if (school === oldName) {
      school = newName;
      return school;
    } else return school;
  });
};
console.log(updateSchoolName("Wakefield", "Stratford", schools).join(","));

//Array map to change school name in array of objects
console.info("Using array.map to change properties in object arrays");
const updateSchoolObj = (oldName, newName, arr) => {
  return arr.map((school) => {
    if (school.name === oldName) {
      return {
        ...school,
        name: newName,
        students: 135,
      };
    } else return school;
  });
};
console.log(updateSchoolObj("Wakefield", "Stratford", schoolObjArr));

//Array map to change school name in one line
console.info("One line map to change school name");
const updateSchoolObj2 = (oldName, newName, arr) => {
  return arr.map((school) =>
    school.name === oldName ? { ...school, name: newName } : school
  );
};
console.log(updateSchoolObj2("Wakefield", "Stratford", schoolObjArr));

//Convert an object into object array
console.info("Converting an object´s properties into array");
const testObj = {
  Yorktown: 10,
  "Washington & Liberty": 2,
  Wakefield: 5,
};
const objToArr = (obj) => {
  return Object.keys(obj).map((key) => ({ name: key, wins: obj[key] }));
};
console.log(objToArr(testObj));

console.info("==================================");
console.info("Array.Reduce in javascript");

const ages = [21, 18, 42, 40, 64, 63, 34];

//Using reduce to get max age
const maxN = ages.reduce(
  (prev, current) => (prev > current ? prev : current),
  0
);
console.log(`Max Age is ${maxN}`);

//Using reduce to get min age
const minN = ages.reduce(
  (prev, current) => (prev < current ? prev : current),
  120
);
console.log(`Min Age is ${minN}`);

//using reduce to convert array into object
console.info(
  "Using Array.reduce to convert an array of objects into single object"
);
const colors = [
  {
    id: "xekare",
    title: "rad red",
    rating: 3,
  },
  {
    id: "jbwsof",
    title: "big blue",
    rating: 2,
  },
  {
    id: "prigbj",
    title: "grizzly grey",
    rating: 5,
  },
  {
    id: "ryhbhsl",
    title: "banana",
    rating: 1,
  },
];

const colorObj = colors.reduce((hash, { id, title, rating }) => {
  hash[id] = { title, rating };
  return hash;
}, {});

console.log(colorObj);

//using array.reduce
console.info("Using array.reduce to filter repeated colors");
const allColors = ["red", "red", "green", "blue", "green"];

const cleanedColors = allColors.reduce((colors, actual) =>
  colors.indexOf(actual) === -1 ? [...colors, actual] : colors
,[]);

console.log(cleanedColors);

console.info("==================================");
console.info("Composition in javascript");
//Chaining functions in js
const template = "hh:mm:ss tt";
const hour = template
.replace("hh","02")
.replace("mm","30")
.replace("ss","00")
.replace("tt","pm");

console.log(`Template was ${template} result is ${hour}`);