var request=require("request");
// request("https://query.yahooapis.com/v1/public/",function(error,response,body){
//     if(error){
//         console.log("SOMETHING WENT WRONG");
//         console.log(error);
//     }
//     else{
//         if(response.statusCode==200){
//             console.log(body);
//         }
//     }
// })

request("https://jsonplaceholder.typicode.com/users/1",function(error,response,body){
    // eval(require("locus"))
    if(!error&&response.statusCode==200){
        var parsedData=JSON.parse(body);
        console.log( parsedData.address.geo.lng);
    }
})