const { number } = require("joi")
const mongoose = require("mongoose")

const razorpaySchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
    },
  
    phone: {
        type: Number,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    cause: {
        type: String,
        required: true,
    },
    order_id:{
        type: String
    }


})

module.exports = mongoose.model("razorpay",razorpaySchema)