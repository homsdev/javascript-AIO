class httpRequest {
  constructor() {
    this.http = new XMLHttpRequest();
  }

  get(url, callback) {
    this.http.open("GET", url, true);
    this.http.addEventListener("load", () => {
      if (this.http.status === 200) {
        callback(this.http.responseText, null);
      } else {
        callback(
          null,
          `Error [${this.http.status}]: Oops something went wrong`
        );
      }
    });
    this.http.send();
  }

  post(url, callback, object) {
    this.http.open("POST", url, true);
    this.http.setRequestHeader("Content-type", "application/json");
    this.http.addEventListener("load", () => {
      if (this.http.status === 201) {
        callback(this.http.responseText);
      } else {
        callback(
          null,
          `Error [${this.http.status}]: Oops something went wrong`
        );
      }
    });
    this.http.send(JSON.stringify(object));
  }

  put(url, callback, object) {
    this.http.open("PUT", url, true);
    this.http.setRequestHeader("Content-type", "application/json");
    this.http.addEventListener("load", () => {
      if (this.http.status === 200) {
        callback(this.http.responseText, null);
      } else {
        callback(
          null,
          `Error [${this.http.status}]: Oops something went wrong`
        );
      }
    });
    this.http.send(JSON.stringify(object));
  }

  delete(url, callback) {
    this.http.open("DELETE", url, true);
    this.http.addEventListener("load", () => {
      if (this.http.status === 200) {
        callback(this.http.responseText, null);
      } else {
        callback(
          null,
          `Error [${this.http.status}]: Oops something went wrong`
        );
      }
    });
    this.http.send();
  }
}

//Testing get request function
const getBtn = document.getElementById("getAlive");
getBtn.addEventListener("click", () => {
  console.log("click");
  const req = new httpRequest();
  req.get("https://rickandmortyapi.com/api/characterr", (data, error) => {
    if (!error) {
      let json = JSON.parse(data);
      let charactersArr = json.results;
      let isAliveArr = charactersArr
        .filter((character) => {
          if (character.status === "Alive") {
            return character;
          }
        })
        .map((character) => {
          return {
            nombre: character.name,
            estado: character.status === "Alive" ? "Vivo" : "Indefinido",
          };
        });
      console.table(isAliveArr);
    } else {
      console.error(error);
    }
  });
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
  req.post(
    "https://jsonplaceholder.typicode.com/users",
    (res, err) => {
      if (!err) console.log(res);
      else console.log(err);
    },
    newUser
  );
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
  req.put(
    "https://jsonplaceholder.typicode.com/users/5",
    (res, error) => {
      if (!error) console.log(res);
      else console.error(error);
    },
    updatedUser
  );
});

//Testing delete request function
const deleteBtn = document.getElementById("deleteBtn");
deleteBtn.addEventListener("click", () => {
  const req = new httpRequest();
  req.delete("https://jsonplaceholder.typicode.com/posts/200", (res, err) => {
    if (!err) console.table(res);
    else console.error(err);
  });
});
