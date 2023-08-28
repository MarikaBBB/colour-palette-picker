const divs = document.querySelectorAll(".colour");
const regenerateButton = document.getElementById("regenerateButton");
const copyButtons = document.querySelectorAll('.copy-hex');
const copiedMessages = document.querySelectorAll('.copied-message');
const lockButtons = document.querySelectorAll('.lock-toggle');

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

// Function to handle lock toggling
function toggleLock(div, lockButton) {
  const isLocked = div.classList.toggle('locked');
  const lockIcon = lockButton.querySelector('.lock-icon');
  const unlockIcon = lockButton.querySelector('.unlock-icon');
  
  lockIcon.style.display = isLocked ? "inline" : "none";
  unlockIcon.style.display = isLocked ? "none" : "inline";
}

// Event listener for lock buttons
lockButtons.forEach((lockButton, index) => {
  lockButton.addEventListener('click', () => {
    toggleLock(divs[index], lockButton);
  });
});

// Event listener for color input
divs.forEach((div) => {
  const colourInput = div.querySelector('.colour-input');
  colourInput.addEventListener('click', () => {
    if (!div.classList.contains('locked')) {
      const newColor = prompt('Enter a new color code:', '');
      if (newColor !== null) {
        updatePaletteColor(div, newColor);
      } else {
        alert('Invalid color code. Please enter a valid color code.');
      }
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
    }, 2000);
  });
});

// Initial color regeneration
function regenerateColors() {
  divs.forEach((div) => {
    if (!div.classList.contains('locked')) {
      const randomColor = generateRandomColorHex();
      updatePaletteColor(div, randomColor);
    }
  });
}

// Initial color generation
regenerateColors();

// Event listener for regenerate button
regenerateButton.addEventListener("click", regenerateColors);
