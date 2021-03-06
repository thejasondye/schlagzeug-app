const express = require('express');
const cors = require('cors');
const { getOneExcerpt, getAllExcerpts } = require('../db/index.js');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.use(express.static(__dirname + '/../dist'));

app.get('/excerpts/:title', (req, res) => {
  getOneExcerpt(req.params.title, (err, excerpt) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(excerpt);
    }
  })
});

app.get('/excerpts/', (req, res) => {
  getAllExcerpts((err, excerpts) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(excerpts);
    }
  })
});


app.listen(port, () => {
  console.log(`listening on port: ${port}!`);
});
