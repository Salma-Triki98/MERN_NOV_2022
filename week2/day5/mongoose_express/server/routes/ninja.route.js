// import the controller 
const ninjaController = require("../controllers/ninjas.controller")

module.exports.showAll = (app) => {
    app.get("/api/ninjas", ninjaController.findAllNinjas)

}

module.exports.create = (app) => {
    app.post("/api/ninjas", ninjaController.createNinja)
}