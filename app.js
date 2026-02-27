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

app.get('/bacheca', (req, res) => {
  const products = [
    {
      title: 'Ciambella',
      Img: 'public\images\ciambellone.jpeg',
      tags: ['Dolce', 'Ciambella', 'Facile'],
    },
    {
      title: 'Cracked',
      Img: 'public\images\cracker_barbabietola.jpeg',
      tags: ['Cracked', 'Barbabietola', 'Intermedio'],
    },
    {
      title: 'Pane fritto',
      Img: 'public\images\pane_fritto_dolce.jpeg',
      tags: ['Fritto', 'Pane', 'Difficile'],
    },
    {
      title: 'Pasta barbabietola',
      Img: 'public\images\pasta_barbabietola.jpeg',
      tags: ['Pasta', 'Primi piatti', 'Facile'],
    },
    {
      title: 'Torta paeasana',
      Img: 'public\images\torta_paesana.jpeg',
      tags: ['Dolce', 'Torta', 'Facile'],
    },
  ];

  res.status(200).json(products);
});

app.listen(port, () => {
  console.log(`Il server è inizializzato all'indirizzo ${appUrl}`);
});
