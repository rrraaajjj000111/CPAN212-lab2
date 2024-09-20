const express = require("express");
const app = express();
const PORT = 8000;
const lab_router = require("./router");

app.use(express.urlencoded({ extended: true }));

app.use("/lab2", lab_router)

app.get("/", (req, res) => {
res.send("Hello from the other side");
});

app.listen(PORT, () => {
console.log(`http://localhost:${PORT}`);
});

app.use("", (req, res) => {
res.status(404).send("Page not found");
});
