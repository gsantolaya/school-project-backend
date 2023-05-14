const { Schema, model } = require("mongoose");

const studentSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  currentYearOfStudy: {
    type: Number,
    required: true,
  },
  payment: {
    type: Boolean,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  birthdate: {
    type: String,
    required: true,
  },
  isBanned: {
    type: Boolean,
    default: false,
  },
  notes: {
    type: {
      firstYear: {
        math: Number,
        languageAndLiterature: Number,
        biology: Number,
        physics: Number,
        chemistry: Number,
        economy: Number,
        geography: Number,
        history: Number,
        physicalEducation: Number,
      },
      secondYear: {
        math: Number,
        languageAndLiterature: Number,
        biology: Number,
        physics: Number,
        chemistry: Number,
        economy: Number,
        geography: Number,
        history: Number,
        physicalEducation: Number,
      },
      thirdYear: {
        math: Number,
        languageAndLiterature: Number,
        biology: Number,
        physics: Number,
        chemistry: Number,
        economy: Number,
        geography: Number,
        history: Number,
        physicalEducation: Number,
      },
      fourthYear: {
        math: Number,
        languageAndLiterature: Number,
        biology: Number,
        physics: Number,
        chemistry: Number,
        economy: Number,
        geography: Number,
        history: Number,
        physicalEducation: Number,
      },
    },
    required: true,
  }
});

module.exports = model("Student", studentSchema);