const express = require("express")
const app = express()
const PORT = 8000
const DB_NAME = "ninjas"

//MIDDLEWARE
app.use(express.json(), express.urlencoded({ extended: true }));

// Connect to the DB ---------
require("./config/mongoose.config")(DB_NAME)
// ---------------------------------------
// import the routes ------------------------------------------------
const AllMyUserRoutes = require("./routes/ninja.route")
AllMyUserRoutes.showAll(app)
AllMyUserRoutes.create(app)

//TODO Create the delete, update and findOne controllers and routes

// ----------------------------------------------------------------------
app.listen(PORT, () => { console.log(`Server started on PORT ${PORT} 🚀🚀`) })