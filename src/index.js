// Event handler for incrementing the counter
const clickCounterHandler = () => {
  // Select the results container (avoid querying unnecessarily by using `#results`)
  const resultContainer = document.querySelector("#results");

  // Update the textContent by converting it to a number and incrementing
  resultContainer.textContent = Number(resultContainer.textContent) + 1;

};

// Select the button and attach the click event listener
const buttonContainer = document.querySelector("#add-one");

// Add the click event listener to the button
buttonContainer.addEventListener("click", clickCounterHandler);

// Best Practice: Keep event listeners as separate functions (like `clickCounterHandler`) to make
// your code more reusable.
