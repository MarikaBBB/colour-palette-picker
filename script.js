const divs = document.querySelectorAll(".colour");
const regenerateButton = document.getElementById("regenerateButton");

// Function to generate a random color in hex format
function generateRandomColorHex() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return "#" + randomColor.padStart(6, "0");
}

// Update colour code
function updatePaletteColor(div, color) {
  const colourInput = div.querySelector('.colour-input');
  colourInput.value = color;
  colourInput.style.backgroundColor = color;
  div.style.backgroundColor = color;
}

// Allow users to change each colour
divs.forEach((div) => {
  const colourInput = div.querySelector('.colour-input');
  const initialColor = generateRandomColorHex();
  updatePaletteColor(div, initialColor);
  
  div.addEventListener('click', (event) => {
    if (!event.target.classList.contains('colour-input')) {
      const newColor = prompt('Enter a new color code:', '');
    
      if (newColor !== null) {
        updatePaletteColor(div, newColor);
      } else {
        alert('Invalid color code. Please enter a valid color code.');
      }
    
      event.stopPropagation();
    }
  });
});

// Initial color regeneration
function regenerateColors() {
  divs.forEach((div) => {
    const randomColor = generateRandomColorHex();
    updatePaletteColor(div, randomColor);
  });
}

// Initial color generation
regenerateColors();

// Event listener for regenerate button
regenerateButton.addEventListener("click", regenerateColors);


