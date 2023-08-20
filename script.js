const divs = document.querySelectorAll("div")
const regenerateButton = document.getElementById("regenerateButton")

// Function to create random colors
function regenerate() {
  for (const div of divs) {
    div.style.backgroundColor = `rgb(${Math.floor(256 * Math.random())}, ${Math.floor(256 * Math.random())}, ${Math.floor(256 * Math.random())})`;
  }
}

// Function to change color on click


// Initial color regeneration
regenerate()

// Event listeners
regenerateButton.addEventListener("click", regenerate)

