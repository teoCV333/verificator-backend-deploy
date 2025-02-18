const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World");
});

// 404 Handler
app.use((req, res) => {
    res.status(404).send("Sorry, can't find that!");
  });


app.listen(8080, () => {
    console.log(`the server is running on port: 8080`)
})