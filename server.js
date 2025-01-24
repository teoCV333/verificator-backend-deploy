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

//const connectDB = require("./config/db");
//const env = require("./config/env");

//connectDB();

app.listen(3000, () => {
    console.log(`the server is running on port: 3000`)
})