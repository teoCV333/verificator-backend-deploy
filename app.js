const express = require("express");
const app = require("express")();
const cors = require("cors");

//const influencerRouters = require("./routes/influencerRoutes");

app.use(cors())
app.use(express.json());


// Routes
//app.use("/", influencerRouters);
app.use("/", (req, res) => {
    res.send("Hello World");
});

module.exports = app;