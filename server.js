const express = require('express')
const morgan = require('morgan')
app = express()

// middleware 
app.use(morgan("dev"))
app.use(express.json())

// registering routes
app.get('/', (req, res) => {
    res.send("It's alive")
})

app.listen(7531, () => console.log("Running on port 7531"))