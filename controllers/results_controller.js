const Results = require("../models/results");
const Student = require("../models/student");

module.exports.getResults = async function (req, resp) {
    try {
        let student = await Student.findOne({ _id: req.params.id });
        return resp.render("results", { title: "Results", student: student });
    } catch (error) {
        console.log("Error in finding results", error);
    }
}

module.exports.submitResults = async function (req, resp) {
    try {
        console.log(req.params.id);
        //let results = await Results.create({ dsa: req.body.dsa, webd: req.body.webd, react: req.body.react,student:req.student._id })
        //return resp.render("results", { title: "Results", student: student });
    } catch (error) {
        console.log("Error in finding results", error);
    }
};