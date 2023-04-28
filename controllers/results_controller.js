const Student = require("../models/student");

module.exports.getResults = async function (req, resp) {
    try {
        let student = await Student.findById(req.params.id);
        return resp.render("results", { title: "Results", student: student });
    } catch (error) {
        console.log("Error in finding results", error);
    }
}

module.exports.submitResults = async function (req, resp) {
    try {
        let student = await Student.findById(req.body.studentId);
        student.dsa = req.body.dsa;
        student.webd = req.body.webd;
        student.react = req.body.react;
        student.save();
        let dashboardURL = `/users/dashboard/${req.user.id}`;
        return resp.redirect(dashboardURL);
    } catch (error) {
        console.log("Error in finding results", error);
    }
};