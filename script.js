async function getRandomQuote() {
    try {
      const response = await fetch('/quote'); // Fetching quote from the backend endpoint
      const data = await response.json();
  
      const quoteText = document.getElementById('quoteText');
      quoteText.textContent = data.quote;
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  }
  