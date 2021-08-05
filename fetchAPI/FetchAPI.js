const btnFetchGet = document.getElementById("getAliveFetch");
const btnFetchPost = document.getElementById("postBtnFetch");
const btnFetchPut = document.getElementById("putBtnFetch");
const btnFetchDelete = document.getElementById("deleteBtnFetch");

btnFetchGet.addEventListener("click", () => {
  fetch("https://rickandmortyapi.com/api/character")
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((json) => console.log(json.results));
});

btnFetchPost.addEventListener("click", () => {
  const reqHeaders = new Headers();
  reqHeaders.append("Content-type", "application/json; charset=UTF-8");
  const newPost = {
    title: "foo",
    body: "bar",
    userId: 1,
  };

  const init = {
    method: "POST",
    headers: reqHeaders,
    body: JSON.stringify(newPost),
  };

  const request = new Request(
    "https://jsonplaceholder.typicode.com/posts",
    init
  );
  fetch(request)
    .then((response) => response.json())
    .then((json) => console.log(json));
});

btnFetchPut.addEventListener("click", () => {
  const reqHeaders = new Headers();
  reqHeaders.append("Content-type", "application/json; charset=UTF-8");
  const updatedPost = {
    id: 1,
    title: "foo",
    body: "bar",
    userId: 1,
  };

  const init = {
    method: "PUT",
    headers: reqHeaders,
    body: JSON.stringify(updatedPost),
  };

  const request = new Request(
    "https://jsonplaceholder.typicode.com/posts/1",
    init
  );

  fetch(request)
    .then((res) => res.json())
    .then((data) => console.log(data));
});

btnFetchDelete.addEventListener("click", () => {
  const options = {
    method: "DELETE",
  };
  const request = new Request(
    "https://jsonplaceholder.typicode.com/posts/1",
    options
  );

  fetch(request).then((res) => console.log(res));
});
