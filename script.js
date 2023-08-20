const divs = document.querySelectorAll("div")
const regenerateButton = document.getElementById("regenerateButton")

function regenerate() {
  for (const div of divs) {
    div.style.backgroundColor = `rgb(${Math.floor(256 * Math.random())}, ${Math.floor(256 * Math.random())}, ${Math.floor(256 * Math.random())})`;
  }
}

regenerate()
regenerateButton.addEventListener("click", regenerate)

