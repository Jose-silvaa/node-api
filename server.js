const routesUser = require("./routes/RoutesUser")
const routesExpense = require("./routes/RoutesExpense")
const express = require("express");
const connectDB = require("./config/database")

const app = express();

connectDB();

app.use(express.json())

app.use("/visitor", routesUser)
app.use("/cost",  routesExpense)


app.listen(8000, ()=>{
    console.log("Running")
})


