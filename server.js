const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = 4000;
app.listen(port, '127.0.0.1', () => {
  console.log(`Server is running at http://127.0.0.1:${port}`);
}); 