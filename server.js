const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const bodyparser = require("body-parser");
const { request } = require("http");

app.use(cors());
app.use(bodyparser.json());



const db = mysql.createConnection(
    {
        user: "root",
        host: "localhost",
        port: "3306",
        password: "",
        database:"",
    }

)
app.get("/", (req, res) => {
    res.send("Fut a server")
}

)



app.listen(7172, () => {
    console.log('A szerver a 7172 porton fut!')
});