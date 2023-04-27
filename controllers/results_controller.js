const Student = require("../models/student");

module.exports.getResults = async function (req, resp) {
    try {
        let student = await Student.findById(req.params.id);
        console.log(student);
        return resp.render("results", { title: "Results", student: student });
    } catch (error) {
        console.log("Error in finding results", error);
    }
}

module.exports.submitResults = async function (req, resp) {
    try {
        
        let student = await Student.findOne({ student: req.body.studentId });
        console.log(student);
        // student.dsa = req.body.dsa;
        // student.webd = req.body.webd;
        // student.react = req.body.react;
        // student.save();
    } catch (error) {
        console.log("Error in finding results", error);
    }
};