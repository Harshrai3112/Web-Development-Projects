var express=require("express");
var app=express();
// '/' Hi there
app.get('/',function(req,res){
    res.send('Hi there  Go Search For following url :- /bye, /dog, /r/Anything, /r/anything/comments/anything/anything   ');
});

// '/bye' GoodBye
app.get('/bye',function(req,res){
    res.send('GoodBye!!');
});

// 'dog' Hii doggy
app.get('/dog',function(req,res){
    res.send("hurr hurr");
});

//first patern practice
app.get('/r/:red',function(req, res) {
    var subreddit=req.params.red;
    res.send("this is " + subreddit.toUpperCase()+" subreddit");
});
//Pattern
app.get('/r/:reddit/comments/:id/:title',function(req, res) {
    console.log(req.params);
    res.send("this is pattern practice"+req.params);
})
//
app.get('*',function(req, res) {
   res.send("this is star"); 
});
// TEll express to listen 
app.listen(process.env.PORT,process.env.IP,()=>console.log("server has Started"));