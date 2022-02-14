require('dotenv').config();
const express= require('express');
const bodyParser = require('body-parser');
const connection = require('./config/connection');

let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res)=>{
    console.log(req);
    res.send("Hello from backend");
});

app.post("/user/create", (req, res)=>{
    //let query = 'INSERT INTO users (username, password) values (\'harsha\', \'harsha\')';
    console.log(req);
    console.log(req.query);
    /*connection.query(query, err => {
        if(err) throw err;
        console.log('Inserted the username and password successfully.');
        res.sendStatus(200);
    });*/
    res.sendStatus(200);
});

app.get("/authenticate", (req, res)=>{
    console.log(req);
    res.send({
        "isAuthorised": true
    });
});

let port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`Nodejs Server running on port ${port}`));