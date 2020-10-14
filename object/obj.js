// OBJECT

// 1. OBJECT LITERAL
// let mahasiswa = {
//     nama: 'Bims',
//     energi: 50,
//     // Method = function dalam sebuah object
//     makan: function(porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`Selamat makan ${this.nama}`)
//     }
// }



// 2. FUNCTION DECLARATION
// function Mahasiswa(nama, energi) {
//     let mahasiswa = {};
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     // METHOD
//     mahasiswa.makan = function(porsi) {
//         this.energi += porsi;
//     }
//     mahasiswa.main = function(jam) {
//         this.energi -= jam;
//     }

//     return mahasiswa;
// }
//     // Instansiasi untuk mengisi object
//     let bims = Mahasiswa('Bims', 10) 



// 3. CONSTRUCTOR FUNCTION
// KEYWORD new
// function Mahasiswa(nama, energi) {
//     // let mahasiswa = {}; Pada constructor function tidak perlu membuat deklarasi variabel
//     this.nama = nama;
//     this.energi = energi;
 
//     // METHOD
//     this.makan = function (porsi) {
//         this.energi += porsi;
//     }
//     this.main = function (jam) {
//         this.energi -= jam;
//     }
//     // Pada constructor function tidak perlu me return ke object
//     // return mahasiswa;
// }
// // Instansiasi untuk mengisi constructor object
// // jika tidak menggunakan keyword 'new' proses instansiasi akan mencari return 
// let bims = new Mahasiswa('Bims', 10)


// 4. object.create()
// masalah kurang efektif jika menggunakan banyak method pada function declaration di tanggulangi oleh object.create()

// const methodMahasiswa = {
//     makan: function (porsi) {
//             this.energi += porsi;
//         }, 
//     main: function (jam) {
//             this.energi -= jam;
//         },
//     tidur: function (jam) {
//         this.energi += jam * 2;
//     }
//     }

// function Mahasiswa(nama, energi) {
//     let mahasiswa = Object.create(methodMahasiswa);
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;


//     return mahasiswa;
// }
//     // Instansiasi untuk mengisi object
//     let bims = Mahasiswa('Bims', 10) 




// PROPERTY
// function Mahasiswa(nama, energi) { 

//     this.nama = nama;
//     this.energi = energi;
// }

// // Constructor Function otomatis mempunyai property/proto
// Mahasiswa.prototype.makan = function(porsi) {
//     this.energi += porsi;
//     return `Halo ${this.nama}, selamat makan`
// }

// Mahasiswa.prototype.main = function (jam) {
//     this.energi += jam;
//     return `Halo ${this.nama}, selamat main`
// }

// let bims = new Mahasiswa('Bimo', 20)



// Menggunakan Class
class Mahasiswa {
    constructor(nama, energi) {
        this.nama = nama;
        this.energi = energi;
    }
    makan(porsi) {
        this.energi += porsi;
        return `Halo ${this.nama}, selamat makan`
    }
}

let bims = new Mahasiswa('Bimo', 20);

