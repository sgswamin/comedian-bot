const jokes = [["What did 0 say to 8?", "Nice belt."], ["Why did the banana go to the doctor?", "He wasn't peeling well"]];
let jokeIndex = 0;
const jokeButton = document.getElementById("joke-button");
const chatContent = document.querySelector(".chat-content");

function appendBotMessage(messageText){
  const messageDiv = document.createElement("div");
  messageDiv.className = "message bot-message";
  chatContent.appendChild(messageDiv);
  const avatar = document.createElement("div");
  avatar.className = "fas fa-robot message-avatar";
  messageDiv.appendChild(avatar);
  const contentDiv = document.createElement("div");
  contentDiv.className = "message-content";
  contentDiv.textContent = messageText;
  messageDiv.appendChild(contentDiv);
}

function appendUserMessage(messageText){
  const messageDiv = document.createElement("div");
  messageDiv.className = "message user-message";
  chatContent.appendChild(messageDiv);
  const avatar = document.createElement("div");
  avatar.className = "fas fa-smile message-avatar";
  messageDiv.appendChild(avatar);
  const contentDiv = document.createElement("div");
  contentDiv.className = "message-content";
  contentDiv.textContent = messageText;
  messageDiv.appendChild(contentDiv);
}

function requestJoke(){
  appendUserMessage("Tell me a joke");
  if (jokeIndex >= jokes.length){
    appendBotMessage("Sorry, I'm out of jokes for now!");
    return;
  }
  jokeButton.style.display = "none";
  appendBotMessage("Hello! I am Comedian Bot, here to make you laugh. Let me think of a joke.");

  setTimeout(function() {
    appendBotMessage("Ok, got one.");}, 1000);

  setTimeout(function() {
    appendBotMessage(jokes[jokeIndex][0]);}, 1500);

  setTimeout(function() {
    appendBotMessage(jokes[jokeIndex][1]);
    jokeIndex++;
    jokeButton.style.display = "inline-block";
  }, 2000);
}
