import * as fs from 'fs'

fs.writeFile('./hello.txt', 'hello, friend', function() {
  console.log('done creating file');
})


