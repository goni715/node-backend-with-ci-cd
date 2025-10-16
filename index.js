const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('This is Node Back-End with CI/CD')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
