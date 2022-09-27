const express =  require('express');

const app = express()

app.get('',function(req,res){
   res.sendFile(__dirname + '/index.html');
});

app.get('/log',function(req,res){
   res.sendFile(__dirname + '/login.html');
});

app.get('/htoolwin',function(req,res){
   res.sendFile(__dirname + '/web.html');
});

app.get('/web',function(req,res){
   res.sendFile(__dirname + '/website.html');
});
 
app.listen(3000,function(){
     console.log("Express Started on Port 3000");
});