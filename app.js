const express = require("express");
const bodyParser = require("body-parser");
const { static } = require("express");

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(static("public"));

let items = [];
let workItems = [];

app.get("/", function (req, res) {
    const getToday = new Date();
    const options = {
        weekday: "long",
        month: "long",
        day: "numeric"
    }
    const today = getToday.toLocaleDateString("en-US", options);
    res.render("list", { listTitle: today, itemDisplay: items });
    // res.sendFile(__dirname + "li/index.ejs");
})

app.post("/", function (req, res) {
    let item = req.body.newItem;
    items.push(item);
    res.redirect("/");
})

app.listen(3000, function () {
    console.log("Server up on 3000.")
})