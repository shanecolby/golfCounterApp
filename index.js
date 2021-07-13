let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let scoreEl = document.getElementById("score-el")
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

