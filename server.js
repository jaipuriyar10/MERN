const express = require('express');
const app = express();
const bp=require('body-parser');
app.use(bp.urlencoded({extended:true}));
app.listen(3000,function(){
  console.log("The server is running at port 3000");
});

app.get("/",function(req,res){

  res.sendFile(__dirname+"/index.html");
  console.log(__dirname);
});


app.post("/",function(req,res){
  console.log(req.body);
  var v1=req.body.num1;
  var v2=req.body.num2;
  var ress=parseInt(v1)+parseInt(v2);
  res.send("The sum of given values is: "+ress);
  res.send("Thanks for posting the values");
});
