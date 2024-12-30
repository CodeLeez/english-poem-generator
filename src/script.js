function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "c9057t5643d1ef0070e941b73ao8bb3f";
  let prompt = `Generate an English poem about ${instructionsInput.value} Separate each line with a <br/> Do not write a title no greetings please just start the poem and Always end the poem by Signing with ElizabethChigudu AI Poems inside a <strong> element`;
  let context = "";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
