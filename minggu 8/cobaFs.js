//proses pemanggilan library fs
const fs = require('fs')

console.log('start reading a file....')

//proses read File text.txt menggunakan library fs
fs.readFile('text.txt', 'utf-8', (err, content) => {
    if (err) {
        console.log('error happaned during reading the file')
        return console.log(err)
    }

    //lakukan sesuatu di sini kalau berhasil
    console.log("yeay, berhasil!" + content);
})
console.log('end of the file')