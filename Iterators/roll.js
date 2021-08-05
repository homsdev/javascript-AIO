const users = [
  {
    id: 7,
    email: "michael.lawson@reqres.in",
    first_name: "Michael",
    last_name: "Lawson",
    avatar: "https://reqres.in/img/faces/7-image.jpg",
  },
  {
    id: 8,
    email: "lindsay.ferguson@reqres.in",
    first_name: "Lindsay",
    last_name: "Ferguson",
    avatar: "https://reqres.in/img/faces/8-image.jpg",
  },
  {
    id: 9,
    email: "tobias.funke@reqres.in",
    first_name: "Tobias",
    last_name: "Funke",
    avatar: "https://reqres.in/img/faces/9-image.jpg",
  },
  {
    id: 10,
    email: "byron.fields@reqres.in",
    first_name: "Byron",
    last_name: "Fields",
    avatar: "https://reqres.in/img/faces/10-image.jpg",
  },
  {
    id: 11,
    email: "george.edwards@reqres.in",
    first_name: "George",
    last_name: "Edwards",
    avatar: "https://reqres.in/img/faces/11-image.jpg",
  },
  {
    id: 12,
    email: "rachel.howell@reqres.in",
    first_name: "Rachel",
    last_name: "Howell",
    avatar: "https://reqres.in/img/faces/12-image.jpg",
  },
];

//User iterator block
const userIterator = makeItemGenerator(users);

function* makeItemGenerator(array) {
  for (let i = 0; i < array.length; i++) {
    yield array[i];
  }
}

const btnNextUser = document.getElementById("nextUser");
const imgUserAvatar = document.querySelector(".card-img-top");
const h5UserName = document.querySelector(".card-title");
const pUserEmail = document.querySelector(".card-text");

const nextUser = () => {
  console.log("Hey!");
  const user = userIterator.next();
  if (!user.done) {
    imgUserAvatar.src = user.value.avatar;
    h5UserName.innerHTML = `${user.value.first_name} ${user.value.last_name}`;
    pUserEmail.innerHTML = user.value.email;
  } else {
    window.location.reload();
  }
};

btnNextUser.addEventListener("click", nextUser);

nextUser();
