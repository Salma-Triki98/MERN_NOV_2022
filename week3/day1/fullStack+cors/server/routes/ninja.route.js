// import the controller 
const ninjaController = require("../controllers/ninjas.controller")

// module.exports.showAll = (app) => {
//     app.get("/api/ninjas", ninjaController.findAllNinjas)

// }

// module.exports.create = (app) => {
//     app.post("/api/ninjas", ninjaController.createNinja)
// }

//!modularize routes
module.exports = app => {
    app.get('/api/ninjas', ninjaController.findAllNinjas);
    app.post('/api/ninjas', ninjaController.createNinja);
    app.get('/api/ninjas/:id', ninjaController.findOneNinja);
    app.put('/api/ninjas/:id', ninjaController.updateExistingNinja);
    app.delete('/api/ninjas/:id', ninjaController.deleteAnExistingNinja);

}