const dotenv = require("dotenv");
dotenv.config();

const dbConnection = {
    url: process.env.URI
};

module.exports = dbConnection;