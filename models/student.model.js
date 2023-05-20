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
  },
  address: {
    type: String,
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
        mathI: Number,
        languageAndLiteratureI: Number,
        biologyI: Number,
        physicsI: Number,
        chemistryI: Number,
        economyI: Number,
        geographyI: Number,
        historyI: Number,
        physicalEducationI: Number,
        mathII: Number,
        languageAndLiteratureII: Number,
        biologyII: Number,
        physicsII: Number,
        chemistryII: Number,
        economyII: Number,
        geographyII: Number,
        historyII: Number,
        physicalEducationII: Number,
        mathIII: Number,
        languageAndLiteratureIII: Number,
        biologyIII: Number,
        physicsIII: Number,
        chemistryIII: Number,
        economyIII: Number,
        geographyIII: Number,
        historyIII: Number,
        physicalEducationIII: Number,
        mathIV: Number,
        languageAndLiteratureIV: Number,
        biologyIV: Number,
        physicsIV: Number,
        chemistryIV: Number,
        economyIV: Number,
        geographyIV: Number,
        historyIV: Number,
        physicalEducationIV: Number
      }
  }
});

module.exports = model("Student", studentSchema);