const express = require('express')
const path = require('path')
const port = 3000
const app = express()

app.use(express.static('public'))

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});
app.get('/api/time', (req, res) => {
  res.json({
    time: new Date().toLocaleTimeString(),
    date: new Date().toLocaleDateString()
  });

});
app.get('/api/greet', (req, res) => {
  const name = req.query.name || 'stranger'; 
  res.send(`Hello,DA ${name}! Welcome to my server.`);
});
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});