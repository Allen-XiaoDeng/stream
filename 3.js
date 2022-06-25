
const fs = require('fs')
const http = require('http')

const server = http.createServer()
server.on('request', (req, res) => {
  const stream = fs.createReadStream('./big_file.txt')
  stream.pipe(res)
})
server.listen(8888)
