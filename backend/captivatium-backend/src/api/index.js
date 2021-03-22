const express = require('express');
const path = require('path');
const ash = require('express-async-handler');
const mongoose = require('mongoose');

const aws_service = require('../aws_service');
const utils = require('../utils');

const router = express.Router();

require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });

// Connecting to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: true,
  useUnifiedTopology: true
}).then(() => utils.logger('Connected to DB')).catch((error) => utils.logger(error));


// Defining Mongoose Schema
const imageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  }
});

// Defining mongoose model
const Image = mongoose.model('Image', imageSchema);


// Returns all files uploaded to s3 --> not efficient
// TODO: Return all elements from mongo collection instead since we keep
//       a reference of each element in it
router.get('/all', ash(async (req, res, next) => {
  const objs = await aws_service.getAll().catch(next);
  if (objs) {
    res.status(200).send(objs);
  } else {
    throw new utils.ErrorHandler();
  }
}));

// Upload file to S3 then save its name and url to mongodb
router.post('/upload', aws_service.upload.array('file', 5), ash(async (req, res, next) => {
  req.files.forEach((element) => {
    Image.create({ name: element.originalname, url: element.location }).then((data) => {
      res.status(201).send(data);
    }).catch(next);
  });
}));


module.exports = router;
