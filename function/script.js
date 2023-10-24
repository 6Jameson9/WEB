
const durationInput = document.getElementById('duration'); // Input field for duration
const startButton = document.getElementById('start-timer'); // "Start Timer" button
const timeRemaining = document.getElementById('time-remaining'); // Display for remaining time
const tooltip = document.getElementById('tooltip'); // Tooltip for messages

let countdown; // Variable to store the timer identifier

startButton.addEventListener('click', () => {
  const duration = parseInt(durationInput.value, 10); // Get the duration from the input field
  startTimer(duration); // Start the timer
});

// Function to start the timer
function startTimer(duration) {
  clearInterval(countdown); // Clear the previous timer, if any

  const startTime = Date.now(); // Time when the timer starts
  const endTime = startTime + duration * 1000; // Time when the timer should end

  displayTimeRemaining(duration); // Display the initial time

  // Start a timer that updates the remaining time every second
  countdown = setInterval(() => {
    const timeLeft = Math.max(0, Math.ceil((endTime - Date.now()) / 1000)); // Calculate the remaining time in seconds
    displayTimeRemaining(timeLeft); // Display the remaining time

    if (timeLeft === 0) {
      clearInterval(countdown); // If time is up, clear the timer
      showTooltip('Timer completed!'); // Show a tooltip message
    }
  }, 1000); // Update interval: every second
}

// Function to display the remaining time
function displayTimeRemaining(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secondsRemaining = seconds % 60;

  const formattedTime = `${minutes}:${secondsRemaining < 10 ? '0' : ''}${secondsRemaining}`;
  timeRemaining.innerText = formattedTime;
}
