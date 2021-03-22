const path = require('path');
const aws = require('aws-sdk');
const s3 = new aws.S3();
const multer = require('multer');
const multerS3 = require('multer-s3');

require('dotenv').config({ path: path.resolve(__dirname, '../.env') });


aws.config.setPromisesDependency();
aws.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION
})


const getOne = async (filename) => {
    const getParams = {
        Bucket: 'captivatium-images',
        Key: filename
    };

    return await s3.getObject(getParams, (err, data) => {
        if(err) return null
    }).promise();

}   


const getAll = async () => {
    const getParams = {
        Bucket: 'captivatium-images'
    };

    return await s3.listObjectsV2(getParams, (err, data) => {
        if(err) return null
    }).promise()
}


const fileFilter = (req, file, cb) => {
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

const multerS3Config = multerS3({
    s3: s3,
    bucket: 'captivatium-images',
    key: (req, file, cb) => {
        cb(null, file.originalname)
    },
    acl: 'public-read',
    limits: { fileSize: 1024 * 1024 * 50 }
});


const upload = multer({
    storage: multerS3Config,
    fileFilter: fileFilter
})


module.exports = {
    getOne,
    getAll,
    upload
}
