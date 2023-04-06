const express = require("express");
const app = express();
const bodyParser = require("body-parser");
require("dotenv").config({ path: "./.env" });
const port = process.env.PORT || 3000;

global.appRoot = __dirname;

const cors = require("cors");
app.use(
    cors({
        origin: "*",
        methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
    })
);
const auth = require("./middleware/auth");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(auth);

let routes = require("./routes"); //importing route
routes(app);

app.use(function (req, res) {
    res.status(404).send({ url: req.originalUrl + " not found" });
});

app.listen(port);

console.log("RESTful API server started on: " + port);
