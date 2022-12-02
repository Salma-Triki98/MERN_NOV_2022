//1. import mongoose
const mongoose = require("mongoose")

const NinjaSchema = new mongoose.Schema({
    name: String,
    num_belts: Number,
    is_graduating: Boolean
})

const Ninja = mongoose.model("Ninja", NinjaSchema);

module.exports = Ninja;