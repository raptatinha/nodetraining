import express from "express";

const app = express();

app.listen(3333, () => console.log("Server is running on port: 3333."));

app.get("/", (req, res) => {
    // return res.send("Hello world!");
    return res.json({
        message: "Here is the data!",
        status: 200
    });
});

app.post("/", (req, res) => {
    
    return res.json({
        message: "New post. Success!",
        status: 200
    });
})