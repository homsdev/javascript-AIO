const btn = document.getElementById("button");

btn.addEventListener("click", () => {
  console.log("click");
  getData("https://rickandmortyapi.com/api/character");
});

function getData(URL) {
  const request = new XMLHttpRequest();
  request.open("GET", URL, true);

  //On state change
  request.addEventListener("readystatechange", () => {
    console.log(`Ready status is: ${request.readyState}`);
  });

  //When a transaction completes succesfully
  request.addEventListener("load", () => {
      console.log("Working");
    if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        console.log(data);
    }
  });

  request.send();
}
