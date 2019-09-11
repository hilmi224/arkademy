//Pemanggilan Library axios
const axios = require('axios')

//URL api
const url ='https://rickandmortyapi.com/api/character';

//Action GET METHOD
axios.get(url).then(res => {

    //Jika Sukses akan tertampil disini
    console.log(res.data);
}).catch(err => {
    //Jika eror akan tertampil disini
    console.log(err);
})