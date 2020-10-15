global.config = require("./config");
require("./dal/dal");
const express = require("express");
const expressSession = require("express-session");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const productsController = require("./controllers/products-controller");
const authController = require("./controllers/auth-controller");
var bodyParser = require("body-parser");
const server = express();


server.use(cors());
server.use(expressSession({
    name: "authenticationCookie",
    secret: "secretData",
    resave: true,
    saveUninitialized: false,
    withCredentials: true
}));

let distDir = "./client/dist/";
server.use(express.static(distDir));

server.use(express.static("uploads"));
server.use(express.json());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({
    extended: false
}));
server.use("/api/products", productsController);
server.use(fileUpload());
server.use("/api/auth", authController);

let port = process.env.PORT || 3000;
server.listen(port, () => console.log("Listening on http://localhost:"+ port));