const dotenv = require('dotenv').config({ path: './config/config.env' });
const cookieParser = require('cookie-parser');


const express = require('express');
const app = express();
const cors = require("cors")
const DB_NAME = "auth";

// MIDDLWARE 
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }), express.json(), express.urlencoded({ extended: true }));
app.use(cookieParser());

// Connecting the DB
require("./config/mongoose.config.js")(DB_NAME);
// listening to the server
// import routes
require('./routes/user.routes')(app);


app.listen(process.env.PORT, () => {
    console.log(`Server is listening at ${process.env.PORT}`);
})
