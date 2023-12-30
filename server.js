const express = require('express');
const app = express();

// Sample quotes array (replace this with your own list of quotes)
const quotes = [
  "The best way to predict the future is to invent it.",
  "Believe you can and you're halfway there.",
  "The only limit to our realization of tomorrow will be our doubts of today.",
  // Add more quotes here...
];

app.get('/quote', (req, res) => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  res.json({ quote: randomQuote });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
