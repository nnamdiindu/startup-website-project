
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res){
    res.render("home");
});

app.get("/portfolio", function(req, res){
    res.render("portfolio");
});

app.get("/services", function(req, res){
    res.render("services");
});

app.get("/contact", function(req, res){
    res.render("contact");
});

app.listen(process.env.PORT || 3000, function(){
    console.log("Server is running on port 3000.");
});
