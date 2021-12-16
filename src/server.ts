import express, { response } from "express";

const app = express();

app.get("/", (req, res) => {
    return res.json({
        message: "Hello world"
    });
});

app.listen(3333, () => {
    console.log("Server running at 3333!");
});
