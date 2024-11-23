const jokeContainer = document.getElementById("joke");
const button = document.getElementById("btn");
const apiJoke =
  "https://v2.jokeapi.dev/joke/Dark,Pun,Spooky,Christmas?blacklistFlags=racist";

let getJoke = () => {
  jokeContainer.classList.remove("joke-arrive");
  fetch(apiJoke)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
      console.log(data);
      if (data.type === "single") {
        jokeContainer.textContent = `${data.joke}`;
        jokeContainer.classList.add("joke-arrive")
      } else if (data.type === "twopart") {
        jokeContainer.textContent = `${data.setup} - ${data.delivery}`;
        jokeContainer.classList.add("joke-arrive")
      }
    })
    .catch((err) => {
      console.error(`error fetchind api joke : ${err}`);
    });
};
button.addEventListener("click", getJoke);
getJoke();
