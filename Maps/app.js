const usersMap = new Map();

//Insert value into Map
usersMap.set("Alan", { "job title": "accountant", email: "alan@email.com" });
usersMap.set("John", { "job title": "manager", email: "john@email.com" });
usersMap.set("Peter", { "job title": "programmer", email: "peter@email.com" });

//Get value from Map
console.info("Get value from map using key");
console.log(usersMap.get("Peter"));
//Search for a key in Map
console.info("Key Alan in Map?");
console.log(usersMap.has("Alan"));
console.info("Key Mark in Map?");
console.log(usersMap.has("Mark"));

// loop into a map
for (const [name, info] of usersMap) {
  console.log(`Name: ${name} Email:${info.email} & job ${info["job title"]}`);
}

for (const key of usersMap.keys()) {
  console.log(`${key}`);
}

for (const value of usersMap.values()) {
  console.log(`${value["job title"]}`);
}

usersMap.forEach((user, key) => {
  console.log(`name:${key} job: ${user["job title"]}`);
});

const pairsArr = Array.from(usersMap);
console.log(pairsArr);

const jobsArr = Array.from(usersMap.values());
console.log(jobsArr);

const keysArr = Array.from(usersMap.keys());
console.log(keysArr);
