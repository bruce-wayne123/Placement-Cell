const mongoose = require('mongoose');
const resultsSchema = new mongoose.Schema(
    {
        dsa: {
            type: String,
            required: true,
        },
        webd: {
            type: String,
            required: true,
        },
        react: {
            type: String,
            required: true,
        },
        student: [{
            type: mongoose.Schema.Types.ObjectId, ref: "Student"
        }]
    },
    { timestamps: true }
);

const Results = mongoose.model("Results", resultsSchema);
module.exports = Results;