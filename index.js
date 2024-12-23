import express from "express";
import path from "path";
import session from "express-session";
import expressEjsLayouts from "express-ejs-layouts";
import { VIEWS_PATH } from "./common/constant.js";
import cookieParser from "cookie-parser";

const app = express();

// Define a constant variable
app.locals.APP_NAME = "Easily";
app.locals.COPYRIGHT_YEAR = new Date().getFullYear(); // Dynamic constant

// to use cookies we have to set like below
app.use(cookieParser());

// configure session
app.use(
  session({
    secret: "My job portal work well",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

// Middleware to Set Global Session Variables
app.use((req, res, next) => {
  res.locals.session = req.session;
  next();
});

// specify which folder will be available publically
app.use(express.static("public"));

app.use(express.json());

// parse the body data
app.use(express.urlencoded({ extended: true }));

// set ejs view engion to use
app.set("view engine", "ejs");

// setup view file path
app.set("views", VIEWS_PATH);
// setup to use express layout
app.use(expressEjsLayouts);

const staticViewPath = path.join("src", "view");

app.use(express.static(staticViewPath));

export default app;
