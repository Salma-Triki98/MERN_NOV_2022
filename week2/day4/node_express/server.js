const express = require('express');
const app = express();
const PORT = 1337;

app.get("/", (req, res) => {
    console.log(req);
    res.send("Hello from server.js")
})

app.get("/api/hello", (req, res) => {
    res.json({

        status: "ok",
        message: true,
        code: 200,
        other: "you're cool"

    })
})

app.listen(PORT, () => { console.log(`Server is listening on port ${PORT} and is listening for requests`) })