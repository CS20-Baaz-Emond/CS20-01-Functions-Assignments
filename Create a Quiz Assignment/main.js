// Multi Page Website By: Baaz

//Add EventListener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {

let score = 0
score += markQuestion("q1", "hypertext markup language")
score += markQuestion("q2", "cascading style sheets")
score += markQuestion("q3", "cascading style sheets")
score += markQuestion("q4", "javascript")
score += markQuestion("q5", "hypertext markup language")
score += markQuestion("q6", "cascading style sheets")

if (score == 0) {
  document.getElementById("verbal-output").innerHTML = "Betterluck next time."
} else if (score == 1) {
  document.getElementById("verbal-output").innerHTML = "It's better than nothing."
} else if (score == 2) {
  document.getElementById("verbal-output").innerHTML = "Getting there."
} else if (score == 3) {
  document.getElementById("verbal-output").innerHTML = "Halfway there!"
} else if (score == 4) {
  document.getElementById("verbal-output").innerHTML = "Doing good!"
} else if (score == 5) {
  document.getElementById("verbal-output").innerHTML = "Almost there!"
} else if (score == 6) {
  document.getElementById("verbal-output").innerHTML = "Perfection."
}

let finalScore = Math.round((score / 6) * 100)
document.getElementById("output").innerHTML = finalScore
document.getElementById("fraction").innerHTML = score
}

function markQuestion(qNum, correctAnswer) {
if (document.getElementById(`${qNum}`).value == correctAnswer) {
  document.getElementById(`${qNum}-info`).style.color = "limegreen"
  document.getElementById(`${qNum}-info`).innerHTML = "Correct!"
  return 1
} else {
  document.getElementById(`${qNum}-info`).style.color = "red"
  document.getElementById(`${qNum}-info`).innerHTML = "Incorrect."
  return 0
}
}