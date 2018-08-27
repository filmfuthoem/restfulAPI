let express = require('express');
let app = express();
let fs = require('fs'); // read user.json

let server = app.listen(8081,()=>{
  let host = server.address().address;
  let port = server.address().port;
  console.log("Application Run at http://%s:%s", host , port);
});

// get all users
app.get('/getUsers',(req,res)=>{
  fs.readFile(__dirname+"/"+"users.json","utf8",(err,data)=>{
    console.log(data);
    res.end(data);
  });
});

// get user by id
app.get('/getUsers/:id',(req,res)=>{
  fs.readFile(__dirname+"/"+"users.json",'utf8',(err,data)=>{
    let users = JSON.parse(data); //convert data from json
    let user = users["user" + req.params.id]; // search by id ex. users["user1"]
    console.log(user);
    res.end(JSON.stringify(user));
  });
});
