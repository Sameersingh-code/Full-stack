// index.js
const express = require('express');
var path =require('path')
const app = express();
const PORT = 3000;

// Middleware (optional)
app.use(express.json());
app.set('view', path.join(__dirname,"views"))
// Routes
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
