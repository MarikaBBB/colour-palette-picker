const divs = document.querySelectorAll("div")
const regenerateButton = document.getElementById("regenerateButton")

// Function to create random colors
function regenerate() {
  for (const div of divs) {
    div.style.backgroundColor = `rgb(${Math.floor(256 * Math.random())}, ${Math.floor(256 * Math.random())}, ${Math.floor(256 * Math.random())})`;
  }
}

//Allow users to change each colour
divs.forEach((div) => {
  let newColor;
  
  div.addEventListener('click', (event) => {
    if (event.target.classList.contains('colour-input')) {
      return; 
    }

    newColor = prompt('Enter a new color code:', '');
    
    if (newColor !== null) {
      div.style.backgroundColor = newColor;
    } else {
      alert('Invalid color code. Please enter a valid color code.');
    }
    
    event.stopPropagation();
  });
});


// Initial color regeneration
regenerate()

// Event listeners
regenerateButton.addEventListener("click", regenerate)

