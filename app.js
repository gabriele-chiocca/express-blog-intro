const express = require('express');
const app = express();
const port = 3000;
const appUrl = `http://localhost:${port}/`;

app.use(express.static('public'));

app.get('/', (req, res) => {
  const responseData = {
    message: 'Server del mio blog',
    success: true,
  };

  res.status(200).json(responseData);
});

app.listen(port, () => {
  console.log(`Il server è inizializzato all'indirizzo ${appUrl}`);
});
