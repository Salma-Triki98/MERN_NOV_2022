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

module.exports.findOneNinja = (req, res) => {
    Ninja.findOne({ _id: req.params.id })
        .then(oneNinja => {
            res.json({ ninja: oneNinja })
        })
        .catch(err => response.json({ message: 'Something went wrong', error: err }))
}

module.exports.updateExistingNinja = (req, res) => {
    Ninja.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedNinja => res.json({ ninja: updatedNinja }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.deleteAnExistingNinja = (req, res) => {
    Ninja.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}