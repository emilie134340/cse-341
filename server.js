const express = require('express');
const app = express();
const port = 3000;

app.use('/', require('./routes'))

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});