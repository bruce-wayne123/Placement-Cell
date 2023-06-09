const mongoose = require('mongoose');
const interviewSchema = new mongoose.Schema(
    {
        companyName: {
            type: String,
            required: true,
        },
        position: {
            type: String,
            required: true,
        },
        interviewDate: {
            type: Date,
            required: true,
        },
        careerpagelink: {
            type: String,
        },
        student: [{
            type: mongoose.Schema.Types.ObjectId, ref: "Student"
        }]
    },
    { timestamps: true }
);
const Interview = mongoose.model("Interview", interviewSchema);
module.exports = Interview;