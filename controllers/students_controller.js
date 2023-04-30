const Student = require("../models/student");
const Interview = require("../models/interview");
const Results = require("../models/results");
const convertor = require('objects-to-csv');
const mongoose = require("mongoose");
const fs = require('fs');
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
                batch: requestBody.batch, college: requestBody.college,
                dsa: "0", webd: "0", react: "0",
                placementStatus: "Didn’t Attempt"

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

module.exports.addStudent = async function (req, resp) {
    return resp.render("addstudent", { title: "Add Student" });
}

module.exports.updateInterviewData = async function (req, resp) {
    let studentData = req.body;
    if (studentData) {
        for (let student of studentData) {
            let dbStudent = await Student.findById(student.studentId);
            dbStudent.placementStatus = student.interviewStatus;
            dbStudent.save();
        }
    }
}

module.exports.downloadData = async function (req, res) {
    const studentList = await Student.find({});
    const dataPresent = [];
    for (var i = 0; i < studentList.length; i++) {
        const student = studentList[i];
        let studentData = {
            StudentId: student.id,
            Name: student.name,
            Email: student.email,
            Batch: student.batch,
            College: student.college,
            PlacementStatus: student.placementStatus,
            DSAScore: student.dsa,
            WebDScore: student.webd,
            ReactScore: student.react
        }
        let interviewData = await Interview.find({});
        for (const interview of interviewData) {
            let studentArray = interview.student;
            let searchStudent = studentArray.includes(student.id);
            if (searchStudent) {
                studentData.CompanyName = interview.companyName;
                studentData.InterviewDate = interview.interviewDate;
            }
        }
        dataPresent.push(studentData);
    }
    const csv = new convertor(dataPresent);
    await csv.toDisk('./studentData.csv');
    return res.download('./studentData.csv', () => {
        fs.unlinkSync('./studentData.csv');
    });
}