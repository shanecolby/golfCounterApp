let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let scoreEl = document.getElementById("score-el")
let greetingID = document.getElementById("greeting-id")
let removeStrokeBTN = document.getElementById("removeStroke-btn")
let count = 0
let scores = []



function increment() {
  count += 1
  countEl.textContent = count
}

function incrementPlusThree() {
  count += 3
  countEl.textContent = count
}

function incrementPlusFour() {
  count += 4
  countEl.textContent = count
}

function incrementPlusFive() {
  count += 5
  countEl.textContent = count
}



function save() {
  scores.push(count)
  let countString = count + " - "
  saveEl.textContent += countString
  if (scores.length === 9) {
    greetingID.textContent = "Halfway! Time to tally up that score."
    console.log("Halfway! Time to tally up that score.")
  } else if (scores.length === 18) {
    greetingID.textContent = "Great Round, lets tally it up!"
  } else if (scores.length > 18) {
    greetingID.textContent = ""
    saveEl.textContent = "Round Complete"
  } else {
    greetingID.textContent = ""
  }
  countEl.textContent = 0
  count = 0
}


function total() {
  let sum = 0
  for (let i = 0; i < scores.length; i++) {
    sum += scores[i]
    scoreEl.textContent = sum
  }
}

function removeStroke() {
  count -= 1
  countEl.textContent = count

}
