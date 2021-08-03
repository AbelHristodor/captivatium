const path = require('path');
const express = require('express');
const ash = require('express-async-handler');
const nodemailer = require('nodemailer');
const fs = require('fs');

const ErrorHandler = require('../utils/error_handler');

const router = express.Router();

require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        type: 'OAuth2',
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
        clientId: process.env.OAUTH_CLIENT_ID,
        clientSecret: process.env.OAUTH_CLIENT_SECRET,
        refreshToken: process.env.OAUTH_REFRESH_TOKEN
    }
});

router.post('/send', ash(async (req, res) => {
    let htmlEmail = fs.readFileSync(path.resolve(__dirname, process.env.CONTACT_MAIL_PATH), 'utf8');
    const { message, email, name } = req.body;
    htmlEmail = htmlEmail.replace('$message', message).replace('$email', email);
    const subject = 'Captivatium.com - Contact Message from: $user';
    const mailOptions = {
        from: email,
        to: process.env.MAIL_USERNAME,
        subject: subject.replace('$user', name),
        text: message,
        html: htmlEmail
    };

    transporter.sendMail(mailOptions, (err, data) => {
        if (err) { throw new ErrorHandler(); } else { res.status(200).send(data); }
    });
}));

module.exports = router;
