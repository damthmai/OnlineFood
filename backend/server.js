import express from "express"
import cors from "cors"
import connectDB  from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"



//app config
const app = express()


const port = 4000


//middleware
app.use(express.json())
app.use(cors())


// DB  Connection

connectDB();


//api endpoints

app.use("/api/food",foodRouter)

app.get("/",(req,res)=>{
    res.send("Api working")
})

app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
})


// mongodb+srv://meghamernstacktrainer:Megha@2000@cluster0.po8tcur.mongodb.net/