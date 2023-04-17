const Results = require("../models/results");
const Student = require("../models/student");

module.exports.getResults = async function (req, resp) {
    try {
        let student;
        let result = await Results.findOne({ student: req.params.id }).populate('student');
        if (result !== null) {
            student = result.student[0];
        }
        else {
            student = await Student.findOne({ _id: req.params.id });
            result = { dsa: 0, webd: 0, react: 0 };
        }
        return resp.render("results", { title: "Results", result: result, student: student });
    } catch (error) {
        console.log("Error in finding results", error);
    }
}

module.exports.submitResults = async function (req, resp) {
    try {
        let result = await Results.findOne({ student: req.body.studentId });
        if (result) {
            result.dsa = req.body.dsa;
            result.webd = req.body.webd;
            result.react = req.body.react;
            result.save();
        }
        else {
            result = await Results.create({ dsa: req.body.dsa, webd: req.body.webd, react: req.body.react, student: req.body.studentId });
        }
    } catch (error) {
        console.log("Error in finding results", error);
    }
};