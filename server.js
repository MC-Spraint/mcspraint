const path = require("path");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3000;

//^For extracting form data in to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//^For serving static files
app.use(express.static(__dirname + "/www"));

app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "www/index.html"), function (err) {
    if (err) {
        res.status(500).send(err);
    }
    });
});


app.listen(PORT,() =>{
    console.log(`Server running on port no. ${PORT}`)
})




