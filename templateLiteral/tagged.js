// TAGGED TEMPLATE LITERALS

// const nama = 'Bimo ariestyan';
// const umur = 22;

// function coba(strings, ...values){
//     // let result = '';
//     // strings.forEach((str, i) => {
//     //     result += `${str}${values[i] || ''}`
//     // });
//     // return result

//     return strings.reduce((result, str, i) => `${result}${str}${values[i] || ''}`, '')
// }

// // ${} = expression
// // strings untuk mengambil data biasa selain expression
// // values untuk mengambil nilai expression
// const str = coba`halo nama saya ${nama}, saya ${umur}tahun.`;




// Highlight

const nama = 'Bimo ariestyan';
const umur = 22;

function coba(strings, ...values){

    return strings.reduce((result, str, i) => `${result}${str}<span class="hl">${values[i] || ''}</span>`, '')
}

// ${} = expression
// strings untuk mengambil data biasa selain expression
// values untuk mengambil nilai expression
const str = coba`halo nama saya ${nama}, saya ${umur} tahun.`;

document.body.innerHTML = str;
