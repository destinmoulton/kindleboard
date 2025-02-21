const path = require('path');
const http = require('http');


const express = require('express');

require('dotenv').config(); // Load environment variables

const app = express();
const server = http.createServer(app);
const port = process.env.PORT || 3000;

// Serve static files
const staticPath = path.join(__dirname, 'static'); // Adjust path if needed
app.use(express.static(staticPath));

// Catch-all route to serve the Vue.js index.html (for SPA routing)
app.get('*', (req, res) => {
});


server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});