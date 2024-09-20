const express = require("express")
const router = express.Router()   

router.get("/", (req, res) => {
    res.send("welcome to lab 2 router file");
});

router.get("/name", (req, res) => {
    res.send("Raj");
});

router.get("/greeting", (req, res) => {
    res.send("HI! my name is Raj");
});

router.get("/add/:a/:b", (req, res) => {
    console.log(res.params)
    let a = parseFloat(req.params.a);
    let b = parseFloat(req.params.b);
    res.send(JSON.stringify(a + b));
});

router.get("/calculate/:x/:y/:op", (req, res) => {
    let x = parseFloat(req.params.x);
    let y = parseFloat(req.params.y);
    let op =  req.params.op

    switch(op){
        case "+":
            res.send(JSON.stringify(x + y));

        case "**":
            res.send(JSON.stringify(x ** y));

        case "-":
            res.send(JSON.stringify(x - y));
        case "*":
            res.send(JSON.stringify(x * y));
                
        case "/":
            res.send(JSON.stringify(x / y));

        default:
            res.send("Invalid operator");
    
    }
   
});



module.exports = router;