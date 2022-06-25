const { Duplex } = require('stream');
const inoutStream = new Duplex({
  write(chunk, encoding, callback) {
    console.log(chunk.toString())
    callback()
  },
  read(size) {
    const char = String.fromCharCode(this.currentCharCode++)
    this.push(char);
    console.log(char)
    if (this.currentCharCode > 90) {
      this.push(null)
    }
  }
})

inStream.currentCharCode = 65;
process.stdin.pipe(inoutStream).pipe(process.stdout)
