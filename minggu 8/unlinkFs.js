//unlink Fs =hapus data/file

//panggil library FS
const fs = require('Fs');

/*baca file terserah.txt apakah ada filenyya?
menggunaka fs.readFile*/
fs.readFile('terserah.txt', async (err, data)=>{
    if(err) console.log ("Data tidak ditemukan!");
    //jalankan console.log dulu menggunak await 
    await console.log("Data ditemukan!");
    //Data di temukan kita harus eksekusi delete
    fs.unlink('terserah.txt', (err)=>{
        //jika gagal delete 
        if(err) console.log("Gagal hapus data!");

        //jika berhasil delete
        console.log("hapus data berhasil!");
    })
})
