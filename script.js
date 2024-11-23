//ambil id dari html
const jokeContainer = document.getElementById("joke");
const button = document.getElementById("btn");
// fetching api free random qoute dr chrome
const apiJoke =
  "https://v2.jokeapi.dev/joke/Dark,Pun,Spooky,Christmas?blacklistFlags=racist";


  // function get random joke
let getJoke = () => {
  jokeContainer.classList.remove("joke-arrive");
  // fetch data
  fetch(apiJoke)
  // cek apakah data berhasil di ambil,kalo true return res parsing jadi json
    .then((res) => {
      if (!res.ok) {
        // throw error
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      //parsing API ke json
      return res.json();
    })
    //olah data kalo res berhasil ke fetch
    .then((data) => {
      console.log(data);
      // di dalam api ada data joke type single dan type twopart
      if (data.type === "single") {
        jokeContainer.textContent = `${data.joke}`;
        jokeContainer.classList.add("joke-arrive")
      } else if (data.type === "twopart") {
        jokeContainer.textContent = `${data.setup} - ${data.delivery}`;
        jokeContainer.classList.add("joke-arrive")
      }
    })
    // tangkap error
    .catch((err) => {
      console.error(`error fetchind api joke : ${err}`);
    });
};
// button ini berfungsi agar setiap btn di click mendapat joke baru dari fucntion getJoke
button.addEventListener("click", getJoke);
getJoke();
