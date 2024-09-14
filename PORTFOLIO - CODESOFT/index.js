document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.getElementById('typewriter-text');
    const text = 'Web Developer';  // The full text to display
    let index = 0;
    let typingInterval;
  
    // Function to handle the typing effect
    function typeWriter() {
      if (index <= text.length) {
        // Set the text from the start to the current index
        textElement.innerText = text.slice(0, index);
        index++;
      } else {
        clearInterval(typingInterval); // Stop typing when text is done
        setTimeout(startTyping, 3000); // Wait 3 seconds before restarting
      }
    }
  
    // Start or restart the typing effect
    function startTyping() {
      index = 0; // Reset the index
      textElement.innerText = ''; // Clear the text
      typingInterval = setInterval(typeWriter, 150); // Start typing again
    }
  
    // Initial start
    startTyping();
  });


//   Form COde 


  