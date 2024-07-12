const mongoose = require("mongoose");

//define the student schema

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  course: {
    type: String,
    required: true,
  },
});

// we are going to create modal from the schema
const student = mongoose.model("Student",studentSchema);

module.exports = student;