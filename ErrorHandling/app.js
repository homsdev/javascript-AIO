//Reference Error
try {
  somefunction();
} catch (error) {
  console.error(error.name);
  console.error(error.message);
  console.log(error instanceof ReferenceError);
  console.log(error instanceof SyntaxError);
} finally {
  console.log("finally block");
}

console.log("Program Continues");

//syntax Error
try {
  // console.log('Hello World'
} catch (error) {
  console.error(error);
}

console.log("Program Continues");

//type Error
try {
  console.log(null.name);
} catch (error) {
  console.error(error);
}

console.log("Program Continues");
//Custom Error
const user = { name: "Serah" };

try {
  if (!user.email) {
    throw "No email was found for this user";
  }
} catch (error) {
  console.error(error);
}


try {
  if (!user.email) {
    throw new TypeError('Email does not exist');
  }
} catch (error) {
  console.error(error);
}