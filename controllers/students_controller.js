const Student = require("../models/student");
const Employee = require("../models/employee");

module.exports.getStudents = async function name(req, resp) {
    try {
        let studentsList = await Student.find({});
        return resp.json(200, {
            message: "List of students",
            students: studentsList
        })
    } catch (error) {
        console.log(error);
    }
}

module.exports.create = async function (req, resp) {
    let requestBody = req.body;
    try {
        let student = await Student.find({ email: requestBody.email });
        if (student) {
            await Student.create({
                name: requestBody.name, email: requestBody.email,
                batch: requestBody.batch, college: requestBody.college, placementStatus: "Didn’t Attempt"
            });
        }
        else {
            console.log("Student already exists - Unable to create");
        }

        return resp.render('dashboard', { title: "Dashboard"});
    } catch (error) {
        console.log(error);
    }
};

module.exports.addStudent = async function (req, resp) {
    return resp.render("addstudent", { title: "Add Student" });
}