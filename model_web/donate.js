const mongoose = require("mongoose")

const donateSchema = new mongoose.Schema({
    fullName:{
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
    },
  
    password: {
        type: String,
        required: true,
    },
    conf_password: {
        type: String,
        required: true,
    },


})

module.exports = mongoose.model("donate",donateSchema)