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
    console.log(requestBody);
    try {
        //await Interview.create({ requestBody });
       
    } catch (error) {
        console.log(error);
    }
};

module.exports.interview = async function (req, resp) {
    let interviews = await Interview.find({});
    return resp.render("interview", { title: "Interviews", interviews: interviews });
}

module.exports.addInterview = async function (req, resp) {
    let studentsList = await Student.find({});
    return resp.render("addInterview", { title: "Add Interview", students: studentsList });
}