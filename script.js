// Append value to the display
function appendToDisplay(value) {
  const display = document.getElementById("display");
  display.value += value;
}

// Clear the entire display
function clearDisplay() {
  const display = document.getElementById("display");
  display.value = "";
}

// Clear the last entry (backspace functionality)
function clearEntry() {
  const display = document.getElementById("display");
  display.value = display.value.slice(0, -1); // Remove the last character
}

// Backspace function (if needed as a different operation)
function backspace() {
  const display = document.getElementById("display");
  display.value = ""; // Clear the display
}

// Toggle positive/negative value
function togglePlusMinus() {
  const display = document.getElementById("display");
  if (display.value.startsWith("-")) {
    display.value = display.value.slice(1); // Remove the minus sign
  } else {
    display.value = "-" + display.value; // Add the minus sign
  }
}

// Calculate square root
function calculateSquareRoot() {
  const display = document.getElementById("display");
  const value = eval(display.value);
  if (value >= 0) {
    display.value = Math.sqrt(value).toFixed(2); 
  } else {
    display.value = "Error"; // Handle negative inputs
  }
}

// Calculate reciprocal
function calculateReciprocal() {
  const display = document.getElementById("display");
  const value = eval(display.value);
  if (value !== 0) {
    display.value = (1 / value).toFixed(2); // Calculate 1/x
  } else {
    display.value = "Error"; // Handle division by zero
  }
}

// Calculate result
function calculateResult() {
  const display = document.getElementById("display");
  try {
    display.value = eval(display.value); // Evaluate the expression
  } catch (error) {
    display.value = "Error"; // Handle invalid expressions
  }
}

// Calculate percentage
function calculatePercentage() {
  const display = document.getElementById("display");
  display.value = (eval(display.value) / 100).toFixed(2); // Convert value to percentage
}

// Memory functions
let memory = 0; // Initialize memory to 0

function calculateMemoryClear() {
  memory = 0; // Clear memory
}

function calculateMemoryRead() {
  const display = document.getElementById("display");
  display.value = memory; // Read value from memory
}

function calculateMemoryStore() {
  const display = document.getElementById("display");
  memory = eval(display.value); // Store current display value in memory
}

function calculateMemoryAdd() {
  const display = document.getElementById("display");
  memory += eval(display.value); // Add current display value to memory
}
