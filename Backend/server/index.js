const path = require('path');
const express = require('express');

const PORT = process.env.PORT || 80;

const app = express();

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../../build')));

// Handle GET requests to /api route
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });