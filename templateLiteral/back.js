// // Template Literals
// const nama = 'Bimo';
// const umur = 22;
// console.log(`Halo, nama saya ${nama}, dan saya ${umur} tahun`)


// // Embedded Expression
//  console.log(`${1+2}`)


// HTML Fragments
// const mhs = {
//     nama :'Bimo',
//     umur : 22
// }


// const mhs1 = `<div class="mhs">
// <h2>${mhs.nama}</h2>
// <span class="umur">${mhs.umur}</span>
// </div>`;



// Looping
// const mhs = [
//   {
//     nama: "Bimo",
//     umur: 22
//   },
//   {
//     nama: "Joni",
//     umur: 23
//   },
//   { nama: "Bhimo", 
//   umur: 24 
//     }
// ];

// const mhs1 = `<div class+"mhs">
// ${mhs.map(m => `<ul>
// <li>${m.nama}</li>
// <li>${m.umur}</li>
// </ul>`).join('')}
// </div>`



// 3. Conditionals
// ternary
// const lagu = {
//     judul: 'Hey jude',
//     penyanyi: 'The beatles',
//     feat: 'Eric clapton'
// }

// const mhs1 = `<div class="lagu">
// <ul>
// <li>${lagu.judul}</li>
// <li>${lagu.penyanyi} ${lagu.feat ? `(feat. ${lagu.feat})` : ''}</li>
// </ul>
// </div>`



// 4. Nested(Bersarang)
 const mhs = {
     nama: 'Bimo',
     semester: 5,
     matKul: ['Rekayasa Web', 'Analisa Sistem Informasi']
 }

function cetakMatKul(matKul) {
    return `
    <ol>
    ${matKul.map(mk => `<li>${mk}</li>`).join('')}
    </ol>`
}

 const mhs1 = `<div class="mhs">
 <h2>${mhs.nama}</h2>
 <span class="semester">Semester : ${mhs.semester}</span>
 <h4>Mata Kuliah :</h4>
 ${cetakMatKul(mhs.matKul)}
 </div>`
document.body.innerHTML = mhs1