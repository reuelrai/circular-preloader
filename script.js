// Select the preloader elements
const progressBar = document.querySelector('.progress-bar');
const progressValue = document.getElementById('progressValue');
const preloader = document.getElementById('preloader');
const content = document.querySelector('.container'); // Changed to match the HTML structure

let progress = 0;
const totalDuration = 1000; // Duration for preloader (1 second)
const intervalDuration = 20; // Update every 20 milliseconds
const increment = (100 / (totalDuration / intervalDuration)); // Increment per interval

// Function to update progress and show percentage
function updateProgress() {
    if (progress <= 100) {
        const offset = 440 - (progress / 100) * 440; // Update offset based on progress
        progressBar.style.strokeDashoffset = offset;
        progressValue.textContent = Math.round(progress) + '%';
        progress += increment; // Increment progress value
    }

    // When the progress reaches 100%, hide the preloader and show the content
    if (progress > 100) {
        clearInterval(progressInterval);
        setTimeout(() => {
            preloader.classList.add('hidden'); // Hide the preloader
            content.style.display = 'flex'; // Show the main content after preloader disappears
        }, 750); // Delay before hiding the preloader
    }
}

// Simulate page loading with the interval
const progressInterval = setInterval(updateProgress, intervalDuration);

// Automatically hide the preloader once the window loads completely
window.onload = function () {
    // Ensure progress goes to 100%
    progress = 100; 
    updateProgress(); // Finalize UI once page loads
};
