//1. import mongoose
const mongoose = require("mongoose")

const NinjaSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: [3, "{PATH} must have at least 3 chars, but you entered {VALUE}"]
    },
    num_belts: {
        type: Number,
        required: true
    },
    is_graduating: {
        type: Boolean,
        default: false
    }
}, { timestamps: true })

const Ninja = mongoose.model("Ninja", NinjaSchema);

module.exports = Ninja;