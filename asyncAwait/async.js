// const coba = new Promise(resolve => {
// setInterval(() => {
//     resolve('selesai')
// }, 1000);
// })
// coba.then(() => console.log(coba));


// // RESOLVE PROMISE
// function cobaPromise() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve('selesai')
//         }, 1000);
//     });
// }

// async function cobaAsync () {
//     const coba = await cobaPromise();
//     console.log(coba)
// }

// cobaAsync();



// REJECT PROMISE
function cobaPromise() {
    return new Promise((resolve, reject) => {
        const waktu = 5000;
        if (waktu < 5000) {
            setTimeout(() => {
                resolve('selesai')
            }, waktu);
        } else {
            reject('kelamaan')
        }
    });
}

// const coba = cobaPromise();
// coba
// .then(coba => console.log(coba))
// .catch(coba => console.log(coba))



async function cobaAsync () {
    try {
        const coba = await cobaPromise();
        console.log(coba)   
    } catch (error) {
        console.error(error)
    }
}

cobaAsync();