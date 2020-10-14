// // // FUNCTION DECLARATION

// // const tampilNama = function(nama) {
// //     return `halo, ${nama}`
// // }
// // console.log(tampilNama('Bimo'));



// // ARROW FUNCTION 1 PARAMETER
// // Mengganti keyword function dengan arrow '=>'
// const tampilNama = nama => {
//     return `halo, ${nama}`
// }
// console.log(tampilNama('Bimo'));



// // ARROW FUNCTION 2/LEBIH PARAMETER

// const nama = (nama, waktu) => {
//     return `Selamat ${waktu}, ${nama}`
// }
// console.log(nama('bimo', 'siang'))



// // ARROW FUNCTION IMPLISIT RETURN
// // Tidak perlu menulis return untuk mengembalikan ke function

// const namaKu = nama => `Halo ${nama}`;
// console.log(namaKu('Joni'));

// let mahasiswa = ['Bimo', 'jonss']
// let jumlahHuruf = mahasiswa.map(nama => nama.length)
// console.log(jumlahHuruf)



// Mencetak menjadi objek
// ({ }) digunakan untuk membuat javascript membacanya sebagai objek, jika tidak ada '()' {} akan dibaca sebagai return

// let mahasiswa = ['Bimo', 'jonss']
// let jumlahHuruf = mahasiswa.map(nama=> ({ nama, jmlHuruf: nama.length }))

// console.table(jumlahHuruf) 



// Arrow Function pada constructor function
// constructor function tidak bisa menggunakan arrow function, sedangkan pada method bisa
// const Mahasiswa = function () {
//     this.nama = 'Bimo';
//     this.umur = 22;
//     this.sayHello = () => {
//         console.log(`halo ${this.nama}, saya ${this.umur} tahun.`);
//     }
// }
// const bims = new Mahasiswa();

