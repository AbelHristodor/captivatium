const express = require('express');
const path =  require('path');
const ash = require('express-async-handler');
const monk = require('monk');

const aws_service = require('../aws_service');
const utils = require('../utils');
const router = express.Router();

require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });
const db = monk(process.env.MONGODB_URI);
const images = db.get('images');

router.get('/one/:filename', ash(async (req, res) => {
    const filename = req.params.filename
    const obj = await aws_service.getOne(filename).catch(e => new utils.ErrorHandler())
    if(obj) {
        res.status(200).send(obj);
    } else {
        throw new utils.ErrorHandler();
    }
}));


router.get('/all', ash(async (req, res) => {
    const objs = await aws_service.getAll().catch(e => new utils.ErrorHandler());
    if(objs) {
        res.status(200).send(all);
    } else {
        throw new utils.ErrorHandler()
    }
}));


router.post('/upload', aws_service.upload.array('file', 5), ash(async(req, res) => {
    res.status(200).send({
        location: req.file.location,
        name: req.file.originalname,
    })
}));

router.get('/data', ash(async (req, res) => {
    const data = await images.find()
    res.send(data);
}));

module.exports = router;
