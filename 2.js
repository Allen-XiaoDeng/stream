const fs = require('fs')
const http = require('http')

const server = http.createServer()
server.on('request', (req, res) => {
  fs.readFile('./big_file.txt', (err, data) => {
    if (err) {
      res.end('error')
    } else {
      res.end(data)
    }
  })
})
server.listen(8888)
