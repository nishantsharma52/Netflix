import express from "express";
import dotenv from 'dotenv';
import databaseConnection from "./utils/database.js";
import cookieParser from "cookie-parser";
import userRoute from "./routes/userRoute.js"
import cors from "cors";

databaseConnection();

dotenv.config({
    path: ".env"
})
const app = express()
//middlewares
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cookieParser())
const corsOptions = {
    origin:"http://localhost:3000",
}
app.use(cors(corsOptions))

app.get("/",(req,res) => {
    res.status(200).json({
        message:"I am coming from backend",
        success: true
    })
})
//api
app.use("/api/v1/user/", userRoute)

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})
