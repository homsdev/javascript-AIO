console.info("Destructuring an array of numbers");
[a, b, ...c] = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(a);
console.log(b);
console.log(c);
console.info("Destructuring an array of names");
[user1, user2, user3] = ["Serah", "Bristol", "Issac"];
console.log(user1);
console.log(user2);
console.log(user3);

console.info("Destructuring a function result");
function getUsers() {
  return ["Serah", "Bristol", "Issac"];
}
[user1, user2, user3] = getUsers();
console.log(user1);
console.log(user2);
console.log(user3);

console.info("Destructuring an object");

const user = {
  id: 7,
  email: "michael.lawson@reqres.in",
  first_name: "Michael",
  last_name: "Lawson",
  avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg",
};

const { first_name, email } = user;
console.log(first_name);
console.log(email);
