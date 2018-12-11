const express = require('express');
const getTimeAsJson = require("./app");
const app = express();


app.get("/api/timestamp/:date_string",(req,resp)=>{

    let inputDate = req.params.date_string;
    getTimeAsJson(inputDate,(err,data)=>{
        err?resp.json(err):resp.json(data);
    });

});

app.get("/api/timestamp",(req,resp)=>{
    let inputDate="";
    getTimeAsJson(inputDate,(err,data)=>{
        err?resp.json(err):resp.json(data);
    });
});
app.listen(3000,(err,data)=>{
    err?console.log("The error is -> ",err):console.log("The app is running on port 3000");
});