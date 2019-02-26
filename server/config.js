require('dotenv').config(); // this loads the defined variables from .env

const env = process.env.NODE_ENV; // 'development' or 'production'

const development = {
 app: {
   url: "http://localhost:" + parseInt(process.env.REACT_APP_DEVELOPMENT_PORT)
 },
 db: {
   url: process.env.MONGODB_URL
 },
 environmentTest: process.env.REACT_APP_COOL_ENVIRONMENT_TEST
};

const production = {
 app: {
   url: process.env.REACT_APP_PUBLIC_URL || "http://localhost" + parseInt(process.env.REACT_APP_DEVELOPMENT_PORT)
 },
 db: {
   url: process.env.MONGODB_URL
 },
};

const config = {
 development,
 production
};

module.exports = config[env];
