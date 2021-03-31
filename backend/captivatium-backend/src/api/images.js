const express = require('express');
const path = require('path');
const ash = require('express-async-handler');
const probe = require('probe-image-size');

// eslint-disable-next-line no-unused-vars
const db = require('../utils/db');
const ErrorHandler = require('../utils/error_handler');
const aws_service = require('../aws_service');
const Image = require('../models/image_model');

const router = express.Router();

require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });

// Returns all files uploaded to s3 --> not efficient, not used
router.get('/s3/all', ash(async (req, res, next) => {
    const objs = await aws_service.getAll().catch(next);
    if (objs) {
        res.status(200).send(objs);
    } else {
        throw new ErrorHandler();
    }
}));

// Upload file to S3 then save its name and url to mongodb
router.put('/images/upload', aws_service.upload.array('files', 5), ash(async (req, res, next) => {
    // Getting categories
    const categories = JSON.parse(req.body.categories);

    // Starting looping through files
    let i = 0;
    req.files.forEach((file) => {
        const category = categories[i];
        i += 1;

        // Getting thumbnail's url from the aws s3 url of the source image
        let thumbnail = file.location.replace('captivatium-images', 'captivatium-images-resized');
        const prepend = 'resized-';
        const append = encodeURI(file.originalname);
        thumbnail = thumbnail.replace(append, prepend.concat(append));

        probe(file.location).then((img) => {
            Image.create({
                title: file.originalname,
                src: file.location,
                resolution: [img.width, img.height],
                category,
                thumbnail
            }).then(() => {
                res.status(201).send();
            }).catch(next);
        });
    });
}));

// Returns the urls and names of all images
router.get('/images/all', ash(async (req, res, next) => {
    // Get all, ignore _id and __v fields
    await Image.find({}, {
        _id: 0, __v: 0
    }).then((data) => {
        res.status(200).send(data);
    }).catch(next);
}));

module.exports = router;
