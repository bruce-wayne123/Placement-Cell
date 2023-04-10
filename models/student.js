const mongoose = require('mongoose');
const studentSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        batch: {
            type: String,
            required: true,
        },
        college: {
            type: String,
            required: true,
        },
        placementStatus:
        {
            type: Boolean,
            required: true,
        }
    },
    { timestamps: true }
);

const Student = mongoose.model("Student", studentSchema);
module.exports = Student;