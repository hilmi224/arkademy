let todo = [
    {
        title:"Rendang",
        description:"Rendang atau randang (Jawi: رندڠ) adalah masakan daging dengan bumbu rempah-rempah yang berasal dari Minangkabau. Masakan ini dihasilkan dari proses memasak yang dipanaskan berulang-ulang menggunakan santan sampai kuahnya kering sama sekali. Proses memasaknya memakan waktu berjam-jam (biasanya sekitar empat jam) hingga yang tinggal hanyalah potongan daging berwarna hitam pekat. Dalam suhu ruangan, rendang dapat bertahan hingga berminggu-minggu. Rendang yang dimasak dalam waktu yang lebih singkat dan santannya belum mengering disebut kalio, berwarna coklat terang keemasan."
    },
    {
        title:"Brokoli",
        description:"Brokoli (Brassica oleracea L. Kelompok Italica) adalah tanaman sayuran yang termasuk dalam suku kubis-kubisan atau Brassicaceae. Brokoli berasal dari daerah Laut Tengah dan sudah sejak masa Yunani Kuno dibudidayakan. Sayuran ini masuk ke Indonesia belum lama (sekitar 1970-an) dan kini cukup populer sebagai bahan pangan."
    },
    {
        title:"Sate Kambing",
        description:"Sate kambing adalah sejenis makanan sate terbuat dari daging kambing. Daging kambing tersebut disate (ditusuk dengan bambu yang dibentuk seperti lidi yang agak besar) dan dibumbui dengan rempah-rempah dan bumbu dapur, kemudian dibakar. Penyajiannya disajikan bersama lalapan kubis, tomat, dan bawang merah yang diiris tipis kemudian diberi kecap dan ditambahkan taburan merica."
    },
    {
        title:"Bakso",
        description:"Bakso atau baso adalah jenis bola daging yang lazim ditemukan pada masakan Indonesia.[2] Bakso umumnya dibuat dari campuran daging sapi giling dan tepung tapioka, akan tetapi ada juga bakso yang terbuat dari daging ayam, ikan, atau udang bahkan daging kerbau. Dalam penyajiannya, bakso umumnya disajikan panas-panas dengan kuah kaldu sapi bening, dicampur mi, bihun, taoge, tahu, terkadang telur dan ditaburi bawang goreng dan seledri. Bakso sangat populer dan dapat ditemukan di seluruh Indonesia; dari gerobak pedagang kaki lima hingga restoran besar. Berbagai jenis bakso sekarang banyak ditawarkan dalam bentuk makanan beku yang dijual di pasar swalayan ataupun mal-mal. Irisan bakso dapat juga dijadikan pelengkap jenis makanan lain seperti mi goreng, nasi goreng, atau cap cai."
    },
    {
       title:"Sambal udang",
       description:"Sambal udang (bahasa Indonesia: sambal goreng udang atau bahasa Minang: balado udang) adalah makanan yang disajikan panas dan berasa pedas yang dapat ditemukan di masakan Indonesia.[1] Makanan ini terbuat dari udang, baik dikupas atau tidak dikupas, ditumis dengan pedas dengan sedikit minyak goreng.[2]"
    }
]

class TodoList{
    item = document.getElementById('todo-list')
    content = document.getElementById('todo-description')

    listItem =()=>{
     for(let x in todo){
         this.item.innerHTML+='<div class="list-item">'+todo[x].title+'</div>'
     }
    }
    setDisplay = (n=0)=>{
      this.content.innerHTML ='<div class="title">'+todo[n].title+'</div>\
      <div class="container">'+todo[n].description+'</div>'      
    }
}

const todoList = new TodoList()