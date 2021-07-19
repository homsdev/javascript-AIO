class httpRequest {
  constructor() {
    this.http = new XMLHttpRequest();
  }

  get(url) {
    return new Promise((resolve, rejected) => {
      this.http.open("GET", url, true);
      this.http.addEventListener("load", () => {
        if (this.http.status === 200) {
          const data = JSON.parse(this.http.responseText);
          return resolve(data);
        } else {
          return rejected(`Oops something went wrong ${this.http.status}`);
        }
      });
      this.http.send();
    });
  }

  post(url, object) {
    return new Promise((res, rej) => {
      this.http.open("POST", url, true);
      this.http.setRequestHeader("Content-type", "application/json");
      this.http.addEventListener("load", () => {
        if (this.http.status === 201) {
          const data = JSON.parse(this.http.responseText);
          return res(data);
        } else return rej(`Oops something went wrong ${this.http.status}`);
      });
      this.http.send(JSON.stringify(object));
    });
  }

  put(url, object) {
    return new Promise((res, rej) => {
      this.http.open("PUT", url, true);
      this.http.setRequestHeader("Content-type", "application/json");
      this.http.addEventListener("load", () => {
        if (this.http.status === 200) {
          return res(JSON.parse(this.http.responseText));
        } else {
          return rej(
            `Oops somethign went wrong Status Code. ${this.http.status}`
          );
        }
      });
      this.http.send(JSON.stringify(object));
    });
  }

  delete(url) {
    return new Promise((resolve, reject) => {
      this.http.open("DELETE", url, true);
      this.http.addEventListener("load", () => {
        if (this.http.status === 200) {
          return resolve(JSON.parse(this.http.responseText));
        } else {
          return reject(
            `Oops somethign went wrong Status Code. ${this.http.status}`
          );
        }
      });
      this.http.send();
    });
  }
}

//Testing get request function
const getBtn = document.getElementById("getAlive");
getBtn.addEventListener("click", () => {
  console.log("click");
  const req = new httpRequest();
  req
    .get("https://rickandmortyapi.com/api/character")
    .then((data) => {
      let charactersArray = data.results;
      let isAliveArray = charactersArray
        .filter((character) => {
          if (character.status === "Alive") {
            return character;
          }
        })
        .map((character) => {
          return {
            nombre: character.name,
            estado: character.status === "Alive" ? "Vivo" : "Desconocido",
          };
        });
      console.table(isAliveArray);
    })
    .catch((error) => console.error(error));
});

//Testing post request function
const postBtn = document.getElementById("postBtn");
postBtn.addEventListener("click", () => {
  const req = new httpRequest();
  const newUser = {
    id: 1,
    name: "Homs Graham",
    username: "HomS",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  };
  req
    .post("https://jsonplaceholder.typicode.com/users", newUser)
    .then((res) => console.log(res))
    .catch((err) => console.error(err));
});

//Testing put request function
const putBtn = document.getElementById("putBtn");
putBtn.addEventListener("click", () => {
  const req = new httpRequest();
  const updatedUser = {
    id: 5,
    name: "homs Dietrich",
    username: "Kamren",
    email: "homs_ger@aie.ca",
    address: {
      street: "Skiles Walkies",
      suite: "Suite 357",
      city: "Roscoeview",
      zipcode: "33263",
      geo: {
        lat: "-31.8129",
        lng: "85.693",
      },
    },
    phone: "(58)999-9999",
    website: "homs.ce",
    company: {
      name: "Keebler LLC",
      catchPhrase: "User-centric fault-tolerant solution",
      bs: "revolutionize end-to-end systems",
    },
  };
  req
    .put("https://jsonplaceholder.typicode.com/users/5", updatedUser)
    .then((res) => console.log(res))
    .catch((error) => console.error(error));
});

//Testing delete request function
const deleteBtn = document.getElementById("deleteBtn");
deleteBtn.addEventListener("click", () => {
  const req = new httpRequest();
  req
    .delete("https://jsonplaceholder.typicode.com/posts/200")
    .then((res) => console.log(res))
    .catch((error) => console.error(error));
});
