const btnGet = document.getElementById("getAlive");


btnGet.addEventListener("click", () => {
  let req = new httpReq("https://rickandmortyapi.com/api/character");
  req.get().then((data) => console.log(data));
});

