const setupText = document.getElementById("setup");
const punchlineText = document.getElementById("punchline");
const button = document.getElementById("btn");
const status = document.getElementById("status");

async function generateJoke() {
  status.textContent = "Loading joke...";

  try {
    // Public Joke API
    const response = await fetch("https://official-joke-api.appspot.com/random_joke");
    const data = await response.json();

    // Display joke
    setupText.textContent = data.setup;
    punchlineText.textContent = data.punchline;

    status.textContent = "";
  } catch (error) {
    status.textContent = "Error loading joke. Try again!";
  }
}

button.addEventListener("click", generateJoke);
