const express = require('express')
const app = express()
const cors = require('cors')
const {symbols} = require("./symbols")
const PORT = process.env.PORT || 8000

app.use(cors())

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api', (req, res) => {
    res.json(symbols)
})

app.get('/api/month/:month', (req, res) => {
    const birthMonth = req.params.month.toLowerCase()
    if(symbols.byMonth[birthMonth]) {
        res.json(symbols.byMonth[birthMonth])
    } else {
        throw new Error('Resource not found.');
    }
})

app.listen(PORT, () => {
    console.log(`🌸 The server is now running on port ${PORT}! 🌸`)
})