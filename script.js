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

// Function to extract color data
function extractColorData() {
  const colorData = {};
  
  divs.forEach((div, index) => {
    const colorName = `color${index + 1}`;
    const colorHex = div.querySelector('.colour-input').value;
    colorData[colorName] = colorHex;
  });
  
  return colorData;
}

// Function to export to JSON
function exportColorPaletteToJSON() {
  const colorData = extractColorData();
  const colorPaletteJSON = JSON.stringify(colorData, null, 2);
  
  // Create a Blob from the JSON data. A blob is a data type that can store binary data.
  const blob = new Blob([colorPaletteJSON], { type: 'application/json' });
  
  // Create a URL for the Blob and create a link for downloading
  // This URL allows to work with the Blob's content as if it were a regular web resource, like an image or a file hosted on a server.
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'color_palette.json'; // File name
  
  // Trigger a click event to start the download
  a.click();
  
  // Clean up by revoking the Blob URL
  window.URL.revokeObjectURL(url);
}

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

// Add an event listener to the export button
const exportButton = document.getElementById('exportButton');
exportButton.addEventListener('click', exportColorPaletteToJSON);


