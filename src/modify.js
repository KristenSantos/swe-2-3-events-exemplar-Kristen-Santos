// Note: it is common to shorten the `event` parameter name to `e`
const clickCounterHandler = (e) => {
  // Use event.target to access the clicked element directly
  const button = e.target;

  // Increment the data-clicks attribute (convert to a number first)
  let clicks = Number(button.dataset.clicks) + 1;

  // Update the data-clicks attribute
  button.dataset.clicks = clicks;

  // Update the button text to reflect the number of clicks
  button.textContent =
    clicks === 1
      ? `I've been clicked ${clicks} time.`
      : `I've been clicked ${clicks} times!`;

  // Best Practice: Use template literals for string interpolation.
};

// Updates the paragraph to display the last key pressed
const handleKeydown = (e) => {
  const keyDown = document.querySelector("#keydown-tracker");

  // Display the key name using the event.code property which is slightly different than the event.key property
  keyDown.textContent = `You pressed ${e.code}`;
};

// Handles event delegation for a container
const handleDelegation = (event) => {
  const resultSpan = document.querySelector("#delegation-result");

  // Check if the target is a button
  if (event.target.matches("button")) {
    resultSpan.textContent = event.target.textContent;
  }

  // Best Practice: Use event delegation for dynamic child elements.
};

// Adds a random number to the list
const addNewRandomNumber = () => {
  const randomNumberLi = document.querySelector("#random-numbers");
  const li = document.createElement("li");

  // Generate a random number and set it as the list item's textContent
  li.textContent = (Math.random() * 10 + 1).toFixed(2);
  randomNumberLi.append(li);

  // Best Practice: Keep the DOM manipulation minimal and efficient.
};

// Main function to initialize event listeners
const main = () => {
  // Q1: Add click event listener for the main button
  const clickCounterEvent = document.querySelector("#click-button");
  clickCounterEvent.addEventListener("click", clickCounterHandler);

  // Q2: Add keydown event listener for the body
  document.body.addEventListener("keydown", handleKeydown);

  // Q3: Replace inline click event with a proper event listener
  const inlineClickEvent = document.querySelector("button#inline-example");
  inlineClickEvent.addEventListener("click", clickCounterHandler);

  // Q4: Add event delegation listener
  const delegationContainer = document.querySelector("#delegation");
  delegationContainer.addEventListener("click", handleDelegation);

  // Q5: Add click event listener for random number generator
  const randomNumberContainer = document.querySelector("#add-random-num");
  randomNumberContainer.addEventListener("click", addNewRandomNumber);

  // Q6: Add click event listener to remove delegation event listener
  const remove = document.querySelector("#remove");
  remove.addEventListener("click", () => {
    delegationContainer.removeEventListener("click", handleDelegation);
  });

  // Best Practice: Centralize all event listener assignments for better organization.
};

main();
