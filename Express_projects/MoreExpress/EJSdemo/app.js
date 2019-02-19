var express=require('express');
var app=express();

app.use(express.static("public"));
app.set("view engine","ejs");
//Embdded Javascript
app.get('/',function(req,res){
    // res.send("<h1>Welcome</h1><h3>to EJS DEMo</h3>");
    res.render("home");
})
app.get('/fallinlovewith/:thing',function(req,res){
    var thing=req.params.thing;
    res.render("love",{thingVar:thing});
});
app.get('/posts',function(req, res) {
   var posts=[
        {title:"Cricket",author:'Harsh Rai'},
        {title:"Footbal",author:'Messi'},
        {title:"news",author:'rajkumar'}
       ] 
       res.render("post",{posts:posts});
});
app.listen(process.env.PORT,process.env.IP,()=>console.log("server is running"));