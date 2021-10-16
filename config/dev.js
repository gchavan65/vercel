const dotenv = require('dotenv');
detenv.config({path:'./.env'})
module.exports = {
    MONGO_URI  = process.env.MONGO_URI,
    TOKEN_SECRET= process.env.TOKEN_SECRET
}