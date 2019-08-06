const ponsel = [
    {
        "nama":"Vivo V15",
        "gambar":"assets/img/1.jpg",
        "harga":"2,999",
        "ram":"3GB",
        "storage":""
    },
    {
        "nama":"Samsung Galaxy A20",
        "gambar":"assets/img/2.jpg",
        "harga":"2,500",
        "ram":"3GB",
        "storage":""
    },
    {
        "nama":"Oppo A7",
        "gambar":"assets/img/3.jpg",
        "harga":"2,000",
        "ram":"3GB",
        "storage":""
    },
    {
        "nama":"xiaomi Note 7 Pro",
        "gambar":"assets/img/4.jpg",
        "harga":"2,000",
        "ram":"3GB",
        "storage":""
    },
    {
        "nama":"Realme C2",
        "gambar":"assets/img/5.jpg",
        "harga":"2,000",
        "ram":"3GB",
        "storage":""
    },
    {
        "nama":"Oppo F9",
        "gambar":"assets/img/6.jpg",
        "harga":"2,000",
        "ram":"3GB",
        "storage":""
    },
    {
        "nama":"Honor",
        "gambar":"assets/img/10.jpg",
        "harga":"2,000",
        "ram":"3GB",
        "storage":""
    },
    {
        "nama":"iphone X",
        "gambar":"assets/img/8.jpg",
        "harga":"2,000",
        "ram":"3GB",
        "storage":""
    },
    {
        "nama":"Savelli Jardin-Secret White Ice",
        "gambar":"assets/img/7.jpg",
        "harga":"2,000",
        "ram":"3GB",
        "storage":""
    },
    {
        "nama":"BlackBerry Porsche Design P9981",
        "gambar":"assets/img/9.jpg",
        "harga":"2,000",
        "ram":"3GB",
        "storage":""
    },
];

let x;

for(x in ponsel){
    let namaPonsel = ponsel[x].nama 
    let gambarPonsel = ponsel[x].gambar
    let hargaPonsel = ponsel[x].harga
    let ramPonsel = ponsel[x].ram
    let storagePonsel = ponsel[x].storage
    let divider = "<div>\
    <span class='nama-ponsel'>"+namaPonsel+"</span>\
    <span class='gambar-ponsel'>"+gambarPonsel+"</span>\
    <span class='harga-ponsel'>"+hargaPonsel+"</span>\
    <span class='ram-ponsel'>"+ramPonsel+"</span>\
    <span class='storage-ponsel'>"+storagePonsel+"</span>\
    </div>";
    document.getElementById('ponsel-hilmi').innerHTML += divider
}