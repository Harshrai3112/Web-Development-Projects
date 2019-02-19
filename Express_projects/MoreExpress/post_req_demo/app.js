var express=require("express");
var app=express();
var bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine ","ejs");
 var friends=["Vishal","Vaibhav","Ketan","Pastaria"];

app.post("/addfriend",function(req,res){
    var newFriend=req.body.newfriend;
    friends.push(newFriend);
    res.redirect("/friends");
    // res.send("Welcome to post request");
});
app.get('/',function(req,res){
    
    res.send("Welcome");
})
app.get("/friends",function(req, res) {
   
    res.render('friend.ejs',{friends:friends})
})


app.get("*",function(req,res){
    res.send("Page not found");
})
app.listen(process.env.PORT,process.env.IP,()=>console.log("server has started"))