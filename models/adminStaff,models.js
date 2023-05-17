const { Schema, model } = require('mongoose');

const adminSchema = new Schema({
    surnameName: {
        type: String,
        required: true,
    },
    dateAdmission:{
        type: Date,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    address:{
        type: String,
        required: true,
    },
    schoolName:{
        type: String,   
        required: true,
    }   
})

module.exports = model('Admin', adminSchema);
