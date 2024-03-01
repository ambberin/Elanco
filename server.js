const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the "public" directory
app.use('/static', express.static(path.join(__dirname, 'public')));

// Start the server
const PORT = process.env.PORT || 5501; // Change the port to 5501
app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  
  // Open the browser
  const open = await import('open');
  open.default(`http://127.0.0.1:5500/static/index.html`); // Adjust the URL accordingly
});

