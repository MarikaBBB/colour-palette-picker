const divs = document.querySelectorAll(".colour");
const regenerateButton = document.getElementById("regenerateButton");
const copyButtons = document.querySelectorAll('.copy-hex');
const copiedMessages = document.querySelectorAll('.copied-message');

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
  
  colourInput.addEventListener('click', () => {
    const newColor = prompt('Enter a new color code:', '');
    
    if (newColor !== null) {
      updatePaletteColor(div, newColor);
    } else {
      alert('Invalid color code. Please enter a valid color code.');
    }
  });
});


// Add event listeners for the Copy buttons
copyButtons.forEach((copyButton, index) => {
  const colourInput = divs[index].querySelector('.colour-input');
  const copiedMessage = copiedMessages[index];
  
  copyButton.addEventListener('click', () => {
    colourInput.select();
    document.execCommand('copy');
    
    copiedMessage.classList.add('visible');
    setTimeout(() => {
      copiedMessage.classList.remove('visible');
    }, 2000); // Hide the message after 2 seconds
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



