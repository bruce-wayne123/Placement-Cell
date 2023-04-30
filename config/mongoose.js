const mongoose = require("mongoose");
//mongoose.connect("mongodb://127.0.0.1/placement_dev");
const url = `mongodb+srv://ckent8040:Google%40123@cluster0.0eq8is5.mongodb.net/?retryWrites=true&w=majority`;
const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
const db = mongoose.connection;
mongoose.connect(url, connectionParams)
    .then(() => {
        console.log('Connected to the database ')
    })
    .catch((err) => {
        console.error(`Error connecting to the database. n${err}`);
    })

// db.on("error", function (error) {
//     console.log("Error in connecting to the mongoose database ", error);
// });

// db.once("open", function () {
//     console.log("Connected to the database :: MongoDB");
// })

module.exports = db;