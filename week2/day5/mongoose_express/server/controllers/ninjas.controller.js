// CRUD operations

const Ninja = require("../models/ninjas.model")

module.exports.findAllNinjas = (req, res) => {
    Ninja.find()
        .then((allNinjas) => {
            res.json(allNinjas) // what it returns will be recieved in react
        })
        .catch(err => {
            res.json({ message: "Something went worng", serverError: err })
        })
}

module.exports.createNinja = (request, response) => {
    Ninja.create(request.body)
        .then(newCreatedUser => {
            response.json({ ninja: newCreatedUser })
        })
        .catch(err => response.json({ message: 'Something went wrong', error: err }))
}

