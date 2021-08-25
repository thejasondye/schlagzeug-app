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
  await Excerpt.find({ title: title }, (err, excerpt) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, excerpt);
    }
  })
};

// GET ALL EXCERPTS
async function getAllExcerpts(callback) {
  await Excerpt.find((err, excerpts) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, excerpts);
    }
  })
};

// POST A QUESTION
// async function postQuestion(postInfo, callback) {
//   const {
//     productId,
//     id,
//     body,
//     name,
//     email,
//   } = postInfo;
//   await Question.create({
//     id,
//     product_id: productId,
//     date_written: Date.now(),
//     body,
//     asker_name: name,
//     asker_email: email,
//     helpful: Math.floor((Math.random() * 10)) + 1,
//     reported: false,
//   }, (err) => {
//     if (err) {
//       callback(err);
//     } else {
//       callback(null);
//     }
//   });
// }

// export database methods
module.exports.getOneExcerpt = getOneExcerpt;
module.exports.getAllExcerpts = getAllExcerpts;
