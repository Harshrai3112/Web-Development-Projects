var express=require("express");
var app=express();
var request=require("request");
var bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));

app.set('view engine','home.ejs')
app.get("/",(req,res)=>{
    var para=req.query.movieName;
    var url="http://www.omdbapi.com/?s="+para+"&apikey=thewdb";
    request(url,(err,response,body)=>{
        if(!err&&response.statusCode==200){
            var parsedData=JSON.parse(body);
            // res.send(parsedData.Search[0].Title);
            res.render('home.ejs',{data:parsedData})
        }
    })
    
})
app.get('/sea',(req,res)=>{
  res.render("search.ejs"); 
});

app.listen(process.env.PORT,process.env.IP,()=>console.log("server has started"))