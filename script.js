// Array of region hints and correct answers
const regions = [
  {
    region: "Ashanti",
    hint: "This region is known for its rich cultural heritage and the Asantehene.",
  },
  {
    region: "Greater Accra",
    hint: "This region houses the capital city of Ghana.",
  },
  {
    region: "Northern",
    hint: "This region is famous for its Mole National Park.",
  },
  {
    region: "Western",
    hint: "This region has beautiful beaches and Takoradi is a major city.",
  },
  { region: "Eastern", hint: "This region is home to the famous Boti Falls." },
  {
    region: "Volta",
    hint: "This region is known for its beautiful Lake Volta and Wli Waterfalls.",
  },
  {
    region: "Central",
    hint: "This region has historic forts like Cape Coast Castle.",
  },
  {
    region: "Brong Ahafo",
    hint: "This region is noted for agriculture, especially cocoa.",
  },
  {
    region: "Upper East",
    hint: "This region is known for the Paga Crocodile Pond.",
  },
  {
    region: "Upper West",
    hint: "This region has the famous Wechiau Hippo Sanctuary.",
  },
  {
    region: "Bono",
    hint: "This region was recently created from Brong Ahafo.",
  },
  {
    region: "Bono East",
    hint: "This region is also part of the split from Brong Ahafo.",
  },
  {
    region: "Ahafo",
    hint: "Another region from the Brong Ahafo split, known for agriculture.",
  },
  {
    region: "North East",
    hint: "This region was recently split from the Northern Region.",
  },
  { region: "Oti", hint: "This region was carved out from the Volta Region." },
  {
    region: "Savannah",
    hint: "This region is rich in natural reserves and was part of Northern Region.",
  },
];

let currentRegionIndex = 0;
let totalScore = 0;
let highScore = 0;

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; //
  }
}

// Display the hint for the current region and clear input field
function displayHint() {
  document.getElementById(
    "hint"
  ).innerText = `Hint: ${regions[currentRegionIndex].hint}`;
  document.getElementById("guessInput").value = "";
}

// Function to handle game over and show modal
function gameOver() {
  document.getElementById("gameOverModal").classList.remove("hidden");
}

// Function to restart the game
function restartGame() {
  document.getElementById("gameOverModal").classList.add("hidden");
  totalScore = 0;
  currentRegionIndex = 0;
  document.getElementById("totalScore").innerText = totalScore;

  // Shuffle the regions for a new game
  shuffleArray(regions);
  displayHint();
}

// Check the player's guess
function submitGuess() {
  const guessInput = document.getElementById("guessInput");
  const messageElement = document.getElementById("message");

  if (
    guessInput.value.trim().toLowerCase() ===
    regions[currentRegionIndex].region.toLowerCase()
  ) {
    totalScore++;
    messageElement.innerText = "Correct!";

    if (totalScore > highScore) {
      highScore = totalScore;
    }
  } else {
    totalScore--; // Deduct a point for a wrong answer
    messageElement.innerHTML = `Wrong answer! The correct answer was <strong>${regions[currentRegionIndex].region}</strong>`;

    // Check for Game Over condition
    if (totalScore <= 0) {
      gameOver();
      return; // Exit the function to stop further execution
    }
  }

  // Clear the input field after checking the guess
  guessInput.value = "";

  // Update score display
  document.getElementById("totalScore").innerText = totalScore;
  document.getElementById("highScore").innerText = highScore;

  // Move to the next region
  currentRegionIndex = (currentRegionIndex + 1) % regions.length;
  displayHint();
}

// Initialize game
window.onload = function () {
  shuffleArray(regions); // Shuffle regions when the game loads
  displayHint();
};
