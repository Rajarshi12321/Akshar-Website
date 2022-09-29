const mongoose = require("mongoose")

const startFundSchema = new mongoose.Schema({
    cause:{
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone_no:{
        type: Number,
        require: true
    },
    problem_statement: {
        type: String,
    },
    problem_description: {
        type: String,
    },
    Amount: {
        type: Number,
        required: true,
    },
    image:{
        type: String
    }

})

module.exports = mongoose.model("startFund",startFundSchema)