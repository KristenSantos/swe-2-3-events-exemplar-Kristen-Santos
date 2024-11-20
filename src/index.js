// Event handler for incrementing the counter
const clickCounterHandler = () => {
  // Select the results container once to avoid querying unnecessarily.
  // Querying unnecessarily would mean repeatedly using document.querySelector("#results")
  // within the same function or multiple times for the same element.
  const resultContainer = document.querySelector("#results");

  // Update the textContent by converting it to a number and incrementing
  resultContainer.textContent = Number(resultContainer.textContent) + 1;

  // Note: The `event` parameter isn't included here because we aren't using it. 
  // This handler doesn't interact with the clicked element (event.target) but instead
  // modifies a specific element in the DOM (`#results`).
};

// Select the button and attach the click event listener
const buttonContainer = document.querySelector("#add-one");

// Add the click event listener to the button
buttonContainer.addEventListener("click", clickCounterHandler);

// Best Practice: Keep event listeners as separate functions (like `clickCounterHandler`) to make
// your code more reusable.
