const path = require('path');
const aws = require('aws-sdk');

const s3 = new aws.S3();
const multer = require('multer');
const multerS3 = require('multer-s3');

require('dotenv').config({ path: path.resolve(__dirname, '../.env') });


// AWS configuration
aws.config.setPromisesDependency();
aws.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION
});


// Gets one image from S3 --> pretty useless - learning purposes
const getOne = async (filename) => {
  const getParams = {
    Bucket: process.env.AWS_BUCKET,
    Key: filename
  };

  return s3.getObject(getParams, (err, data) => {
    if (err) return null;
    return data;
  }).promise();
};


// Gets all images from s3 --> pretty useless - learning purposes
const getAll = async () => {
  const getParams = {
    Bucket: process.env.AWS_BUCKET
  };

  return s3.listObjectsV2(getParams, (err, data) => {
    if (err) return null;
    return data;
  }).promise();
};


// Filtering Images, accepting jpegs and pngs
const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};


// Multer S3 Config
const multerS3Config = multerS3({
  s3,
  bucket: process.env.AWS_BUCKET,
  key: (req, file, cb) => {
    cb(null, file.originalname);
  },
  acl: 'public-read',
  limits: { fileSize: 1024 * 1024 * 50 }
});


const upload = multer({
  storage: multerS3Config,
  fileFilter
});


module.exports = {
  getOne,
  getAll,
  upload
};
