const express = require('express')
const port = 3000
const app = express()

app.use(express.static('public'))
app.get('/', (req, res) => {
  res.send('Hello, World! This is my first server.');
});
app.get('/about', (req, res) => {
  res.send('This is the about page. I built this server myself!');
});

app.get('/contact', (req, res) => {
  res.send('Contact me at: hello@mysite.com');
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