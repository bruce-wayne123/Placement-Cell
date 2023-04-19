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
        let interview = await Interview.create({
            companyName: requestBody.companyName, position: requestBody.position,
            interviewDate: requestBody.interviewDate, careerpagelink: requestBody.careerpagelink
        });
        if (interview) {
            if (requestBody.student.length === 24) {
                interview.student.push(requestBody.student);
            }
            else {
                for (const student of requestBody.student) {
                    interview.student.push(student);
                }
            }
        }
        interview.save();
        let interviews = await Interview.find({}).populate('student');;
        return resp.render("interview", { title: "Interviews", interviews: interviews });
    } catch (error) {
        console.log(error);
    }
};

module.exports.interview = async function (req, resp) {
    let interviews = await Interview.find({}).populate('student');;
    return resp.render("interview", { title: "Interviews", interviews: interviews });
}

module.exports.interviewDetails = async function (req, resp) {
    let interviews = await Interview.find({ _id: req.params.id }).populate('student');
    return resp.render("interviewdetails", { title: "Interview Details", interviews: interviews});
}

module.exports.addInterview = async function (req, resp) {
    let studentsList = await Student.find({});
    return resp.render("addInterview", { title: "Add Interview", students: studentsList });
}