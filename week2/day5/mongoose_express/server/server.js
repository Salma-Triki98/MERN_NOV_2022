const express = require("express")
const app = express()
const cors = require("cors")
const PORT = 8000
const DB_NAME = "ninjas"

//MIDDLEWARE
app.use(cors());
app.use(express.json(), express.urlencoded({ extended: true }));

// Connect to the DB ---------
require("./config/mongoose.config")(DB_NAME)
// ---------------------------------------
// import the routes ------------------------------------------------
// const AllMyUserRoutes = require("./routes/ninja.route")
// AllMyUserRoutes.showAll(app)
// AllMyUserRoutes.create(app)
//! modularize routes
require("./routes/ninja.route")(app)

// ----------------------------------------------------------------------
app.listen(PORT, () => { console.log(`Server started on PORT ${PORT} 🚀🚀`) })