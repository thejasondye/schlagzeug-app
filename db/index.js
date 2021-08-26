/* eslint-disable no-console */

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/schlagzeug', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('db connected!'));

const excerptSchema = new mongoose.Schema({
  title: String,
  level: Number,
  instrument: String,
  family: String,
  tempo: Number,
  url: String,
  style: String,
  category: String,
  recordings: [
    {
      title: String,
      url: String,
      tempo: Number
    }
  ]
});

const Excerpt = mongoose.model('Excerpt', excerptSchema);

// GET ONE EXCERPT
async function getOneExcerpt(title, callback) {
  console.log('the correct db func is being called');
  await Excerpt.findOne({ title: title }, (err, excerpt) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, excerpt);
    }
  })
};

// GET ALL EXCERPTS
async function getAllExcerpts(callback) {
  console.log('the wrong db func is being called');
  await Excerpt.find().sort({ instrument: 1 }).exec((err, excerpts) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, excerpts);
    }
  })
};


// export database methods
module.exports.getOneExcerpt = getOneExcerpt;
module.exports.getAllExcerpts = getAllExcerpts;
