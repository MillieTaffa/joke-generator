function displayJoke(response) {
  console.log(response.data.answer);

  new Typewriter("h1", {
    strings: response.data.answer,
    autoStart: true,
    cursor: null,
    delay: 20,
  });
}

function tellJoke(event) {
  event.preventDefault();

  let apiKey = "a1f90bc0bf23da8c35fe325tob5f8845";
  let context = "You're a funny comedian who tells the best jokes.";
  let prompt = "Tell me a hilarious joke.Keep it brief";

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  console.log("called the ai api");
  axios.get(apiUrl).then(displayJoke);
}

let jokeBtn = document.querySelector("#generate-joke-btn");
jokeBtn.addEventListener("click", tellJoke);
