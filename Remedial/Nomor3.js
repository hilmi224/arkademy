var nomor =  [9, 2, 3, 4, 2, 7, 8, 5, 11, 1]

var genap = [];
var ganjil = [];
var i = 0;

	for(i; i <nomor.length; i++){
		if (nomor[i] % 2 == 0) {
			genap.push(nomor[i]);
		}else{
			ganjil.push(nomor[i]);
		}
	}
		console.log(ganjil);
		console.log(genap);