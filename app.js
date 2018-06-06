const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('啦啦的天天')
})

app.get('/lalala', function (req, res) {
  res.send('哈哈哈哈')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})