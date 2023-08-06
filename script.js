document.addEventListener("DOMContentLoaded", function() {
    // Set the date we're counting down to
    const countdownDate = new Date("2023-12-31T00:00:00").getTime();
  
    // Update the countdown every 1 second
    const countdownInterval = setInterval(function() {
      // Get the current date and time
      const now = new Date().getTime();
  
      // Calculate the remaining time in milliseconds
      const timeRemaining = countdownDate - now;
  
      // Calculate days, hours, minutes, and seconds
      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  
      // Display the countdown
      document.getElementById("days").innerText = formatTime(days);
      document.getElementById("hours").innerText = formatTime(hours);
      document.getElementById("minutes").innerText = formatTime(minutes);
      document.getElementById("seconds").innerText = formatTime(seconds);
  
      // If the countdown is over, display a message
      if (timeRemaining < 0) {
        clearInterval(countdownInterval);
        document.getElementById("days").innerText = "00";
        document.getElementById("hours").innerText = "00";
        document.getElementById("minutes").innerText = "00";
        document.getElementById("seconds").innerText = "00";
        alert("Countdown is over!");
      }
    }, 1000);
  
    // Helper function to add leading zeros
    function formatTime(time) {
      return time < 10 ? `0${time}` : time;
    }
  });
  