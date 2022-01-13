const username = process.env.USERNAME

if (process.argv[2] === 'web-49') {
    console.log('correct')
} else {
    console.log('wrong')
}

console.log(`The username is ${username}`)

const express = require('express')
const app = express()

app.get('/hello_there', (req, res) => {
    res.status(200).json({ message: 'General Kenobi'})
})

const port = 9000

app.listen(port, () => {
    console.log(`*Listening on port: ${port}*`)
})