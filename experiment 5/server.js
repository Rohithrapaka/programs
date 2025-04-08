const express = require('express');
const app = express();
const path = require('path');
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'login.html'));
});
app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'register.html'));
});
app.get('/welcome', (req, res) => {
    res.sendFile(path.join(__dirname, 'welcome.html'));
});

app.post('/login', (req, res) => {
    res.redirect("/login");
});
app.post('/register', (req, res) => {
    res.redirect("/register");
});
app.listen(5050, () => {
    console.log('Express server is running on port 5050');
});
