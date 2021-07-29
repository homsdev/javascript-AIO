class httpFetchRequest {
  constructor(type, url, content_type = null) {
    this.url = url;
    this.requestInit = {
      method: type,
    };
    this.content_type = content_type;
    this.request = new Request(url, this.requestInit);
  }
  get() {
    return fetch(this.request)
      .then((response) => response.json())
      .then((json) => {
        return json.results;
      });
  }

  post(objJson) {
    const headers = new Headers();
    headers.append("Content-type", this.content_type);
    this.requestInit["body"] = JSON.stringify(objJson);
    this.requestInit["headers"] = headers;
    this.request = new Request(this.url, this.requestInit);
    console.log(this.requestInit);
    return fetch(this.request)
      .then((response) => {
        console.log(response);
        response.json();
      })
      .then((json) => json);
  }
}

const btnGet = document.getElementById("getAlive");
const btnPost = document.getElementById("postBtn");

btnGet.addEventListener("click", () => {
  let httpRequest = new httpFetchRequest(
    "GET",
    "https://rickandmortyapi.com/api/character"
  );
  let characters = httpRequest.get();
  characters.then((data) => console.log(data));
});

btnPost.addEventListener("click", () => {
  const request = new httpFetchRequest(
    "POST",
    "https://jsonplaceholder.typicode.com/posts",
    "application/json; charset=UTF-08"
  );

  const post = {
    title: "foo",
    body: "bar",
    userId: 1,
  };

  request.post(post).then((data) => console.log(data));
});
