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
        throw new Error('Month not found.');
    }
})

app.get('/api/country/:country', (req, res) => {
    const birthPlace = req.params.country.toLowerCase()
    if(symbols.byCountry[birthPlace]) {
        res.json(symbols.byCountry[birthPlace])
    } else {
        throw new Error('Country not found.');
    }
})

app.listen(PORT, () => {
    console.log(`🌸 The server is now running on port ${PORT}! 🌸`)
})