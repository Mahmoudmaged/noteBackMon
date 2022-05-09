const express = require('express')
const { dbConnection } = require('./config/dbConn')

const app = express()
app.use(express.json())
require('dotenv').config({ path: './config/.env' })
const port = process.env.PORT
app.use('/api/v1/users', require('./api/user.routes'))
app.use('/api/v1/notes', require('./api/note.routes'))

app.get('*', (req, res) => {
    res.send('welcome')
});
dbConnection()
    //ejs
app.listen(port, () => console.log(`Example app listening on port ${port}!`))