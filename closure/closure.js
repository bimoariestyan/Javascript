// function init() {
//     let nama = 'Bimo';
//     let umur = '22';

//     // tampilNama adalah function closure
//     function tampilNama() {
//         console.log(nama, umur);
//     }
//     tampilNama();
// }
// init();



// function ucapkanSalam(waktu) {
//     return function(nama) {
//         console.log(`Halo ${nama}, selamat ${waktu}`);
//     }
// }
// let selamatPagi = ucapkanSalam('Pagi')
// let selamatSiang = ucapkanSalam('Siang')

// selamatPagi('Bimo');
// selamatSiang('Joni');




let add = function() {
    let counter = 0;
    return function() {
        return ++counter;
    }
}
// function add harus dimasukkan ke sebuah variabel jika tidak hasil yang ditampilkan adalh scriptnya
let a = add();

console.log(a());
console.log(a());