const { Readable } = require('stream');



const inStream = new Readable()
inStream.push('hello')
inStream.push('world')
inStream.push(null)
inStream.pipe(process.stdout)
