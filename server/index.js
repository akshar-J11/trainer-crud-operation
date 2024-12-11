// NodeJs GET request
// const http=require("http");
// const server=http.createServer((req,res)=>{
//     if(req.method==='GET' && req.url==='/akshar'){
//         res.writeHead(200,{'Content-Type':'text/plain'})
//         res.end("Hello Everyone!!!");
//     }
//     else{
//         res.writeHead(404,{'Content-Type':'text/plain'});
//         res.end("Not Found");
//     }
// });

// server.listen(3000,()=>{
//     console.log("Node Server is running on http://localhost:3000")
// })


//ExpressJs GET request code
// const express=require("express");
// const app=express();
// const PORT=8000;

// app.get("/",(req,res)=>{
//     res.send("Hello Everyone");
// })
// app.listen(PORT,()=>{
//     console.log(`Express Server is running on http://localhost:${PORT}`);
// })


///applying backend to views's index.html
// const express=require("express");
// const app=express();
// const PORT=8000;

// app.get("/",(req,res)=>{
//     res.sendFile(__dirname+"/views/index.html");
// })
// app.use(express.static(__dirname+"/views"));
// app.listen(PORT,()=>{
//     console.log(`Express Server is running on http://localhost:${PORT}`);
// })


//Express E6
import express from 'express';
import path from 'path';
import {fileURLToPath} from 'url';

const app=express();
const __filename=fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename)
const PORT=8000;
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"views","index.html"))
})
app.use(express.static(path.join(__dirname,"views")))
app.listen(PORT,()=>{console.log(`Server is running on http://localhost:${PORT}`)})