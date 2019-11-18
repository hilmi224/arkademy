const a = 'a';
const promiseku = new promiseku((resolve, reject) => {
    if (a === 'a') {
        resolve("Berhasil");
    } else {
        reject("Gagal");
    }
});

promiseku.then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
});