// CS10 GRADE CALC BY BAAZ
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  let css1 = +document.getElementById("css1-in").value;
  let sp1 = +document.getElementById("sp1-in").value;
  let sp2 = +document.getElementById("sp2-in").value;
  let css2 = +document.getElementById("css2-in").value;
  let pa = +document.getElementById("pa-in").value;
  
  let finalGrade = (css1 + sp1 + sp2 + css2 + pa) / 5;

  document.getElementById("output").innerHTML = Math.round(finalGrade);

  let mathLetter1 = getLetterGrade(css1)
  document.getElementById("css1-letter-grade").innerHTML = mathLetter1

  let mathLetter2 = getLetterGrade(sp1)
  document.getElementById("sp1-letter-grade").innerHTML = mathLetter2

  let mathLetter3 = getLetterGrade(sp2)
  document.getElementById("sp2-letter-grade").innerHTML = mathLetter3

  let mathLetter4 = getLetterGrade(css2)
  document.getElementById("css2-letter-grade").innerHTML = mathLetter4

  let mathLetter5 = getLetterGrade(pa)
  document.getElementById("pa-letter-grade").innerHTML = mathLetter5

  let mathLetter6 = getLetterGrade(finalGrade)
  document.getElementById("final-letter-grade").innerHTML = mathLetter6
}

function getLetterGrade(grade) {
if (grade < 50) {
return "n F"
} else if (grade < 60) {
return " D"
} else if (grade < 75) {
return " C"
} else if (grade < 90) {
return " B"
} else if (grade < 100){
return "n A"
} else {
return "n A+"  
}
}