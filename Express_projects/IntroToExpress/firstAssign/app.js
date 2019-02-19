var express = require("express");
var app=express();

app.get('/',function(req,res){
    res.send("Hi There, Welcome to my assignment");
})
app.get('/speak/:animal',function(req, res) {
    var par=req.params.animal.toLowerCase();
   var sounds={
       dog:"Woof Woof",
       cat:"Meow Meow",
       cow:"MOO MOO",
       fish:"jksdfh"
   }
//   var sound=sounds.par;
   res.send(par+" says  " +sounds[par]);
})
app.get('/repeat/:str/:num',function(req, res) {
    var par=req.params;
    var result="";
    for(var i=0;i<parseInt(par.num);i++){
        result+=par.str+" \n";
    }
    res.send(result);
})
app.get('*',function(req,res){
    res.send("Page not found");
})
app.listen(process.env.PORT,process.env.IP,()=>console.log("server is running"));
