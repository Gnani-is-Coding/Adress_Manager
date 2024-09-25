const express = require("express")
const {initializeDatabase} = require("./database")
const cors = require("cors")
const userRoutes = require("./routes/UserRoutes")
const addressRoutes = require("./routes/addressRoutes")

const app = express()
const PORT = 8000

app.use(express.json())
app.use(cors())

// initializeDatabase()

app.use("/api/users", userRoutes)
app.use("/api/address", addressRoutes)


app.get("/", (req,res) => {
    console.log("Serve running !!!")
    res.json({"msg": "Server Running!!"})
})

app.listen(PORT, () => {
    console.log("Server running at port:", PORT)
})