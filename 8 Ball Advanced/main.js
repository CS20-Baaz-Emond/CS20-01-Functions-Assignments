//Magic 8 Ball Simulator by: Baaz

//8 Ball Event Listener
document.getElementById("magic8ball-in").addEventListener("click", btnClicked);

//HTML Vars
let output = document.getElementById("div-out");

function btnClicked() {
  //Input Vars
  let question = document.getElementById("question-in").value.toLowerCase();
  output.innerHTML = getResponse(question)
}

function getResponse(q) {
if (q === "") {
  return "Please ask a question."
} else if (q === "does a magic 8 ball actually work?") {
  return "How dare you doubt me!"
} else if (q === "is javascript awesome?") {
  return "Of course!"
} else {
  return randomResponse()
}
}

function randomResponse() {
  const random = ["without a doubt.", "Outlook: not so good.", "As I see it, yes.", "Concentrate and ask again", "Don't count on it."]
  return random[Math.floor(Math.random() * random.length)]
}