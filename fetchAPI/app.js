class httpFetchRequest {
  constructor(type, url) {
    this.type = type;
    this.url = url;
  }

  async API(request) {
    const data = await fetch(request);
    return await data.json();
  }

  async get() {
    const reqInit = {
      method: this.type,
    };
    const req = new Request(this.url, reqInit);
    const data = await this.API(req);
    return data.results;
  }

  async post(obj) {
    const reqInit = {
      method: this.type,
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(obj),
    };

    const req = new Request(this.url, reqInit);
    const data = await this.API(req);
    return data;
  }
}

const btnGet = document.getElementById("getAlive");
const btnPost = document.getElementById("postBtn");

btnGet.addEventListener("click", () => {
  let req = new httpFetchRequest(
    "GET",
    "https://rickandmortyapi.com/api/character"
  );

  req.get().then((data) => console.log(data));
});

btnPost.addEventListener("click", () => {
  let req = new httpFetchRequest(
    "POST",
    "https://jsonplaceholder.typicode.com/posts"
  );
  
  const obj = {
    title: "foo",
    body: "bar",
    userId: 1,
  };

  req.post(obj).then((data) => console.log(data));
});
