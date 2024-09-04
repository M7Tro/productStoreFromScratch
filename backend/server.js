import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import path from 'path';

import ProductRouter from './routes/productRouter.js';

dotenv.config();

const app = express();

//middleware: 
app.use((req, res, next)=>{
    console.log("Request received: ", req.method, req.path);
    next();
})

app.use(express.json()); //middleware for parsing request bodies with json data.

//setUp:
const PORT = process.env.PORT || 3000;
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        app.listen(PORT, ()=>{console.log(`Listening on port ${PORT}`)});
    })


//routers:
app.use('/api/products', ProductRouter);

//configuration for deployment:
const __dirname = path.resolve();

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, "/frontend/dist")));
    app.get("*", (req, res)=>{
        res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"))
    })
}