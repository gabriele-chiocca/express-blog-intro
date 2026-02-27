const express = require('express');
const app = express();
const port = 3000;
const appUrl = `http://localhost:${port}/`;

const products = [
  {
    title: 'Ciambella',
    Img: '/images/ciambellone.jpeg',
    tags: ['Dolce', 'Ciambella', 'Facile'],
  },
  {
    title: 'Cracked',
    Img: '/images/cracker_barbabietola.jpeg',
    tags: ['Cracked', 'Barbabietola', 'Intermedio'],
  },
  {
    title: 'Pane fritto',
    Img: '/images/pane_fritto_dolce.jpeg',
    tags: ['Fritto', 'Pane', 'Difficile'],
  },
  {
    title: 'Pasta barbabietola',
    Img: '/images/pasta_barbabietola.jpeg',
    tags: ['Pasta', 'Primi piatti', 'Facile'],
  },
  {
    title: 'Torta paeasana',
    Img: `/images/torta_paesana.jpeg`,
    tags: ['Dolce', 'Torta', 'Facile'],
  },
];

app.use(express.static('public'));

app.get('/', (req, res) => {
  const responseData = {
    message: 'Server del mio blog',
    success: true,
  };

  res.status(200).json(responseData);
});

app.get('/bacheca', (req, res) => {
  products;

  res.status(200).json(products);
});

app.listen(port, () => {
  console.log(`Il server è inizializzato all'indirizzo ${appUrl}`);
});
