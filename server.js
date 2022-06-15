const  express = require("express");

const app = express();

app.get("/",function(request,response){ // home page  
     response.sendFile(__dirname + "/index.html");
    // response.send("hello world");
});
app.get("/contact",function(req,res){ // contact page
    res.send("This is contact page");
});
app.get("/about",function(req,res){ // about page
    res.send("Hi kartik here");
});
app.get("/hobbies",function(req,res){ // about page
    res.send("My hobbies are different ");
});


app.listen(3000,function(){
    console.log("server started");
});