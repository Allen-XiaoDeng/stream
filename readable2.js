const { Readable } = require('stream');

const inStream = new Readable({
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
inStream.pipe(process.stdout)

//这次的数据是按需供给的，对方调用read我们才给一次数据
