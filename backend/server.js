const express = require("express");
const app = express();
const db = require("./db/data");
const cors = require("cors");

app.use(
    cors({
        origin:"*",
    })
)

app.get("/cars", async (req, res) => {
    const results = await db.getCars();
   //console.log((results));
    res.status(200).send(results);
})

// test if server works properly
app.get("/test", (req, res) => {
    res.status(200).json({ testPassed: true });
});

app.listen(8000, () => {
    console.log("Server is running on port 8000");
})

module.exports.app = app;