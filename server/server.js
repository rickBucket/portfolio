const express = require('express');
const PORT = 3000;

const app = express();

app.use(express.static('dist'));
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});