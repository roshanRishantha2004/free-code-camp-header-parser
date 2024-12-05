const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/api/whoami', (req, res) => {
    const ipAddress = req.ip || req.connection.remoteAddress;
    const language = req.headers['accept-language'];
    const software = req.headers['user-agent'];
  
    res.json({
      ipaddress: ipAddress,
      language: language,
      software: software,
    });
});
  

app.listen(3000, () => console.log('Server is listeing on port 3000'));