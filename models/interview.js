const mongoose = require('mongoose');
const interviewSchema = new mongoose.Schema(
    {
        companyName: {
            type: String,
            required: true,
        },
        interviewDate: {
            type: Date,
            required: true,
            unique: true
        },
        interviewStatus:
        {
            type: Boolean,
            required: true,
        }
    },
    { timestamps: true }
);

const Interview = mongoose.model("Interview", interviewSchema);
module.exports = Interview;