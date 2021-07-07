// While loop
let number = 0;
while (number <= 12) {
  console.log(number);
  number = number + 2;
}

//breaking a loop
for (let current = 20; ; current = current + 1) {
  if (current % 7 == 0) {
    console.log(`Found current module equal to 0 : ${current}`);
    break;
  }
}

//looping a triangle
console.info("Triangle Excercise");
let triangle = "#";
while (triangle.length <= 7) {
  console.log(triangle);
  triangle += "#";
}
//FizzBuzz program
console.info("Excercise Fizz Buzz");
for (number = 1; number <= 100; number++) {
  if (number % 3 == 0 && number % 5 == 0) {
    console.log("FizzBuzz");
  } else if (number % 3 == 0) {
    console.log("Fizz");
  } else if (number % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(number);
  }
}
//Chessboard generator
console.info("Excercise Chessboard Generator");
let size = 16;
let j = 0;
let chessboard = "";
for (let i = 1; i <= Math.pow(size, 2); i++) {
  if (j % 2 != 0) {
    chessboard += i % 2 == 0 ? " " : "#";
  } else {
    chessboard += i % 2 == 0 ? "#" : " ";
  }
  if (i % size == 0){
    chessboard += "\n";
    j++;
  } 
    
}
console.log(chessboard);
