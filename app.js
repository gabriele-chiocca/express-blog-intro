const express = require('express');
const app = express();
const port = 3000;
const appUrl = `http://locahost:${port}`;

app.use(express.static('public'));
