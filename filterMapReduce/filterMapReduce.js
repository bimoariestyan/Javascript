const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// FOR
// Mencari angka  >=3 
// const angkaNew = [];
//  for (let index = 0; index < angka.length; index++) {
//      if (angka [index] >= 3) {
//          angkaNew.push(angka[index]);
//      }
     
//  }


 // FILTER 
 // Mencari angka >= 3
//  s

 // MAP 
 // Mengkalikan semua angka dengan angka 5
 const angkaKali = angka.map(b =>  b * 5);
 

 // REDUCE
 // menjumlahkan seluruh elemen pada array
 const red = angka.reduce((accumulator, currentValue) => accumulator + currentValue);


 // METHOD CHAINING
 // Cari angka > 5
 // Mengkalikan 3
 // Jumlahkan
 const hasil = angka.filter(a => a > 5)
 .map(a => a * 3)
 .reduce((acc, cur) => acc + cur);