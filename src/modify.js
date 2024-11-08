// These are your event handlers
const clickCounterHandler = () => {
};

const handleKeydown = () => {
};

// We've started this one for you
const handleDelegation = (event) => {
  const resultSpan = document.querySelector('#delegation-result');

  // TODO: Only do this if the target is right
  resultSpan.textContent = event.target.textContent;
};

const addNewRandomNumber = () => {
};


// Select the elements and attach your event handlers inside main
const main = () => {
  // Q1: Add an event listener for clickCounterHandler here...

  // Q2: Add an event listener for handleKeydown here...

  // Q3: Add an event listener for clickCounterHandler again...

  // Q4: We've already added this listener for you...
  const delegationContainer = document.querySelector('#delegation');
  delegationContainer.addEventListener('click', handleDelegation);

  // Q5: Add an event listener for addNewRandomNumber here...

  // Q6: Add an event listener to remove handleDelegation here... 
};

main();
