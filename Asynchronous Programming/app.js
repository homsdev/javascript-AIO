//Callbacks
/* 
    The action is started and when it finishes, the callback function is called with the result
*/

const toDos = [
  { title: "First todo", body: "This is first toDo" },
  { title: "Second todo", body: "This is second toDo" },
];

const createToDo = (toDo, callback) => {
  console.log("Executing first part");
  setTimeout(() => {
    toDos.push(toDo);
    callback();
  }, 10000);
};

const getToDo = () => {
  console.log("Executing second part");
  setTimeout(() => {
    console.table(toDos);
  }, 1000);
};

createToDo({ title: "Third todo", body: "This is third toDo" }, getToDo);

const logUser = (callback) => {
  let name = prompt("What´s your name");
  callback(name);
};

const sayHi = (name) => {
  alert(`Hello ${name}`);
};

logUser(sayHi); 

