let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let scoreEl = document.getElementById("score-el")
let count = 0
let scores = []


function increment() {
  count += 1
  countEl.textContent = count
}

function save() {
  scores.push(count)
  let countString = count + " - "
  saveEl.textContent += countString
  countEl.textContent = 0
  count = 0
}


console.log(scores)

