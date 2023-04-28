const Student = require("../models/student");
const Interview = require("../models/interview");
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
        return resp.redirect('/interviews/getInterview');
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
    return resp.render("interviewdetails", { title: "Interview Details", interviews: interviews });
}

module.exports.addInterview = async function (req, resp) {
    let studentsList = await Student.find({});
    return resp.render("addInterview", { title: "Add Interview", students: studentsList });
}

module.exports.getExternalJobs = async function (req, resp) {
    req.flash("success", "Post published");
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "keywords": "it,node,react",
        "location": "india"
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("https://jooble.org/api/1004380f-dc7b-4b8c-b695-cc70f5252ea8", requestOptions)
        .then(response => response.text())
        .then(function (result) {
            let jsonResult = JSON.parse(result);
            return resp.render("externalJobs", { title: "Jobs list", jobs: jsonResult.jobs });
        })
        .catch(error => console.log('error', error));
}