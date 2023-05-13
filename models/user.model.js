const { Schema, model } = require("mongoose")

const userSchema = new Schema({
    firstName: {
        type: String, 
        required: true
    },
    lastName: {
        type: String, 
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password: {
        type: String, 
        required: true
    },
    isBanned: Boolean,
    isAdmin: Boolean
})

module.exports = model("User", userSchema)