const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  specialty: {
    type: String,
    required: true,
  },
  availability: [
    {
      date :{
        type: String,
        maxlengt: 100
      },
      timeslotes : [
        {
            start: {
              type: String,
              required: true
            },
            end: {
              type: String,
              required: true
            }
          },
          
      ]
    }
  ]
});

const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;
