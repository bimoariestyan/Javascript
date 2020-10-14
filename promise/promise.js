// contoh 1 Promise
// let ditepati = true;
// const janji1 = new Promise((resolve, reject) => {
// if (ditepati) {
//     resolve ('Janji telah ditepati!');
// } else {
//     reject('ingkar janji')
// }
// })

// janji1
// .then (response => console.log('OK' + response))
// .catch (response => console.log('NOT OK' + response));



// Contoh 2 Promise
let ditepati = true;
const janji2 = new Promise((resolve, reject) => {
    if (ditepati) {
        setTimeout(() => {
           resolve('Ditepati setelah beberapa waktu') 
        }, 2000);
    } else {
        setTimeout(() => {
            resolve('Tidak ditepati setelah beberap waktu')
        }, 2000);
    }
})

console.log('Mulai');

// console.log(janji2.then (() => console.log(janji2)));
janji2
// finally dijalankan apabila then atau catch siap untuk dijalankan
.finally(() => console.log('selesai menunggu'))
.then(response => console.log('OK' + response))
.catch(response => console.log('NOT OK' + response))

console.log('Selesai');




// Contoh 3 Promise
// Promise.all()
const film = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            judul: 'Batman',
            director: 'Nolan',
            pemeran: 'Bims'
        }])
    }, 1000);
});

const cuaca = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            kota: 'Jakarta',
            temp: 28
        }])
    }, 500);
})

// Menjalankan beberapa promise dalam satu waktu
Promise.all([film, cuaca])
.then(response => {
const [film, cuaca] = response;
console.log(film);
console.log(cuaca);

});