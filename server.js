const express=require("express");
const path=require("path");

const app=express();

app.use("/js",express.static(path.resolve(__dirname,"dist","js")));

app.get('/*',(req,res)=>{
    res.sendFile(path.resolve("dist","index.html"));
});
app.listen(process.env.PORT|| 5060,()=>
    console.log("server is running......")
);