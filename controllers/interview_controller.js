const Student = require("../models/student");
const Interview = require("../models/interview");

// module.exports.getStudents = async function name(req, resp) {
//     try {
//         let interviews = await Interview.find({});
//     } catch (error) {
//         console.log(error);
//     }
// }

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

        return resp.render('dashboard', { title: "Dashboard" });
    } catch (error) {
        console.log(error);
    }
};

module.exports.interview = async function (req, resp) {
    let interviews = await Interview.find({});
    return resp.render("interview", { title: "Interviews", interviews: interviews });
}

module.exports.addInterview = async function (req, resp) {
    return resp.render("addInterview", { title: "Add Interview" });
}