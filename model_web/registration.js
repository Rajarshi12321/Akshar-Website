const mongoose = require("mongoose")

const registerSchema = new mongoose.Schema({
    fullName:{
        type: String,
        required: true,
    },
    userName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone_no: {
        type: Number,
        required: true,
        min:10,
    
    },
    password: {
        type: String,
        required: true,
    },
    conf_password: {
        type: String,
        required: true,
    },
    gender :{
        type: String,
    }


})

module.exports = mongoose.model("register",registerSchema)