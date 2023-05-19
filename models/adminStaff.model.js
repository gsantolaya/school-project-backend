const { Schema, model } = require("mongoose");

const adminSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  dateAdmission: {
    type: Date,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  schoolName: {
    type: String,
    required: true,
  },
  phoneInstitution: {
    type: String,
    required: true,
  },
  emailInstitution: {
    type: String,
    required: true,
  },
});

module.exports = model("Admin", adminSchema);
