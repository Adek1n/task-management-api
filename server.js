import express from "express";
import getRouter  from "./routers/get.js";
import putRouter  from "./routers/put.js";
import postRouter  from "./routers/post.js";
import deleteRouter from "./routers/delete.js";
import {writeData} from "./task-manager/fileSystem.js"
const server=express();
server.use("/tasks",getRouter,putRouter,postRouter,deleteRouter);
server.all("/",(req,res)=>{
    res.end("This page does not exist, try going to /tasks")
})
writeData({
    "hello":"hi"
});
server.listen(3000)