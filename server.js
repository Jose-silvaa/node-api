const routes = require("./routes/routes")
const express = require("express");
const connectDB = require("./config/database")

const app = express();

connectDB();

app.use(express.json())

app.use("/api", routes)


app.listen(8000, ()=>{
    console.log("Running")
})


