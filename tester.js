const fs = require("fs");
const { console } = require("inspector");
const path = require("path")



fs.readFile( path.join(__dirname, "pages", "home.html"),"utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
  });

