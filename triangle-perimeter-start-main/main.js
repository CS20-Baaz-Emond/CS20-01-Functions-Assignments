// Triangle Perimeter Assignment Start Code by: Baaz

document.getElementById("calculate-btn").addEventListener("click", btnClicked)

function btnClicked() {
    let xA = document.getElementById("xA-in").value
    let xB = document.getElementById("xB-in").value
    let xC = document.getElementById("xC-in").value
    let yA = document.getElementById("yA-in").value
    let yB = document.getElementById("yB-in").value
    let yC = document.getElementById("yC-in").value

    let AB = dist(xA, yA, xB, yB)
    let AC = dist(xA, yA, xC, yC)
    let BC = dist(xB, yB, xC, yC)

    document.getElementById("AB-out").innerHTML = AB
    document.getElementById("AC-out").innerHTML = AC
    document.getElementById("BC-out").innerHTML = BC

    let perimeter = AB + AC + BC
    document.getElementById("perimeter-out").innerHTML = perimeter

}

function dist(x1, y1, x2, y2) {
    let A = x2 - x1
    let B = y2 - y1
    let distance = Math.sqrt((A * A) + (B * B))
    return distance
}