const express = require('express');
const app = express();
const port = 1569;

// Serve Static files from the "public" folder
app.use(express.static('public'));

// Define a route for the home page
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

app.get('/about', (req, res) => {
    res.send('About Us');
});

app.use(express.json());

app.post('/submit', (req, res) => {
    const data = req.body;
    res.send(`Received: ${JSON.stringify(data)}`);
});

appp.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

