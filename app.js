const path = require('path');
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const cookieParser = require('cookie-parser');

require('dotenv').config({ path: path.resolve(__dirname, '.env') });

const app = express();
const imagesApi = require('./src/api/images');
const emailApi = require('./src/api/email');
const logger = require('./src/utils/logger');

// Allows only requests from a list of domains
const whitelist = ['https://localhost:3000', 'http://localhost:4000']; // white list consumers
const corsOptions = {
    origin(origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(null, false);
        }
    },
    methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    credentials: true, // Credentials are cookies, authorization headers or TLS client certificates.
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'device-remember-token', 'Access-Control-Allow-Origin', 'Origin', 'Accept']
};

// Standard middlewares
app.use(morgan(process.env.LOGGER_FORMAT));
app.use(helmet());
app.use(helmet.contentSecurityPolicy({
    ...helmet.contentSecurityPolicy.getDefaultDirectives()
}));
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'client/build', 'index.html')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// API routes
app.use('/api/images', imagesApi);
app.use('/api/email', emailApi);

// Route not found middleware
// eslint-disable-next-line no-unused-vars
app.use((req, res, next) => {
    // Create error and add some info to it
    const error = new Error('Route not found');
    error.statusCode = 404;
    error.route = req.url;

    // Sending error to the errorHandler middleware
    next(error);
});

// Error handlers after all other middlewares
// eslint-disable-next-line no-unused-vars
app.use((error, req, res, next) => {
    // Generic Error handler

    // If status code of error not found then set it to a generic 500 internal server error
    if (!error.statusCode) error.statusCode = 500;

    if (!error.route) error.route = undefined;

    // Send error
    res.status(error.statusCode).send({
        error: {
            status: error.statusCode,
            route: error.route,
            message: error.message || 'Internal Server Error',
            stack: error.stack
        }
    });
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

// Starting Server
const port = process.env.PORT || 4000;
const host = process.env.EXPRESS_HOST || '127.0.0.1';

app.listen(port, () => {
    /* eslint-disable no-console */
    logger.info(`Listening: http://${host}:${port}`);
    /* eslint-enable no-console */
});

module.exports = app;
