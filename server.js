const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.send('ER Dashboard file server is live. Access the file at /Hospital Emergency Room Dashboard.xlsx');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
