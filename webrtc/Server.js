// Imports
const express = require("express");
const path = require("path");


// define PORT number
const PORT =  process.env.PORT || 3000;

// initialize app
const app = express();

// Static Routs
app.use(express.static(path.join(__dirname, "Home")));


// Start Server On given PORT
app.listen(PORT, () => `listening on port ${PORT}`);