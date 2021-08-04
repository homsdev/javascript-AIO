class myHttp {
  get(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }

  post(url, obj) {
    const requestInit = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(obj),
    };

    return new Promise((resolve, reject) => {
      fetch(url, requestInit)
        .then((res) => {
          if (res.status === 201) {
            return resolve("New post was created");
          } else {
            return reject("Somehting went wrong");
          }
        })
        .catch((err) => reject(err));
    });
  }

  put(url, obj) {
    const requestInit = {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(obj),
    };

    return new Promise((resolve, reject) => {
      fetch(url, requestInit)
        .then((res) => {
          if (res.status === 200) {
            return resolve("Post updated correctly");
          } else {
            return reject(`Error ${res.status}: Oops something went wrong`);
          }
        })
        .catch((error) => reject("Oops somethign went wrong"));
    });
  }

  delete(url) {
    const requestInit = {
      method: "DELETE",
    };

    return new Promise((resolve, reject) => {
      fetch(url, requestInit)
        .then((res) => {
          resolve(`${res.status}: Ok post was deleted`);
        })
        .catch((error) => reject(error));
    });
  }
}

const btnCustomFetch = document.getElementById("btnCustomFetch");
const btnCustomPost = document.getElementById("btnCustomPOST");
const btnCustomPut = document.getElementById("btnCustomPUT");
const btnCustomDelete = document.getElementById("btnCustomDELETE");

btnCustomFetch.addEventListener("click", () => {
  const req = new myHttp();
  req.get("https://rickandmortyapi.com/api/character").then((data) => {
    console.log(data.results);
  });
});

btnCustomPost.addEventListener("click", () => {
  const req = new myHttp();
  const newPost = {
    title: "foo",
    body: "bar",
    userId: 1,
  };

  req
    .post("https://jsonplaceholder.typicode.com/posts", newPost)
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
});

btnCustomPut.addEventListener("click", () => {
  const req = new myHttp();
  const newPost = {
    title: "foo",
    body: "bar",
    userId: 1,
  };

  req
    .put("https://jsonplaceholder.typicode.com/posts/1", newPost)
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
});

btnCustomDelete.addEventListener("click", () => {
  const req = new myHttp();
  req
    .delete("https://jsonplaceholder.typicode.com/posts/22")
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
});
