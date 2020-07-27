var dotenv = require('dotenv');

dotenv.config();

module.exports = [{
    JWT_SECRET: process.env.JWT_SECRET || 'lalaland',
    PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID || 'sb',
    accessKeyId: process.env.accessKeyId || 'accessKeyId',
    secretAccessKey: process.env.secretAccessKey || 'secretAccessKey',
}];