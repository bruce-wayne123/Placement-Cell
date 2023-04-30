const express = require("express");
const portNo = 8000;
const app = express();

const cookieParser = require('cookie-parser');

app.use(express.urlencoded());
app.use(cookieParser());
const expressLayouts = require('express-ejs-layouts');
app.use('/assets', express.static('assets'));

//make the uploads path avaiable to the browser
app.use('/uploads', express.static(__dirname + '/uploads'));
app.use(expressLayouts);
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

const session = require("express-session");

const passport = require("passport");
const passportLocal = require('./config/passport-local-strategy');
const passportJWT = require('./config/passport-jwt-strategy');
const MongoStore = require("connect-mongo");
const flash = require("connect-flash");
const customMiddleware = require("./config/middleware.js");
const route = require('./routes/index');
app.use(express.json());
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(session({
    name: "placementCell", secret: "123",
    saveUninitialized: false, resave: false, cookie: { maxAge: 1000 * 60 * 100 },
    store: new MongoStore({
        mongoUrl: 'mongodb+srv://ckent8040:Google%40123@cluster0.0eq8is5.mongodb.net/test?retryWrites=true&w=majority',
        autoRemove: "disabled"
    }, function (err) {
        console.log(err || "Connect to MongoDB setup is OK");
    })
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(passport.SetAuthenticatedUser);
app.use(flash());
app.use(customMiddleware.setFlash);
app.use("/", route);


app.listen(portNo, function (error) {
    if (error) {
        console.log(`Error in running server on portNo : ${portNo}`);
        return;
    }
    console.log(`Server is running on port : ${portNo}`);
});