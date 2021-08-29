const mongoose = require('mongoose');
const logger = require('./logger');

// Connecting to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true
}).then(() => logger.info('Connected to DB')).catch((error) => logger.error(error));

module.exports = mongoose;
