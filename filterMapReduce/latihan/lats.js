// Ambil semua elemen video
const list = Array.from(document.querySelectorAll('[data-duration]'))

// Pilih hanya 'Javascript Lanjutan'
// cari /filter video yang didalamnya include/terdapat tulisan JAVASCRIPT LANJUTAN
let jsLanjut = list.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))
// Ambil durasi masing2 video
.map(item => item.dataset.duration)

// Ubah durasi menjadi float, ubah menit menjadi detik
.map(waktu => {
    // 10:30 -> [10, 30] split menjadi array
    const parts = waktu.split(':').map(part => parseFloat(part))
    return (parts[0] * 60) + parts[1];
})

// Jumlahkan semua detik
.reduce((total, detik) => total + detik)

// Ubah format jadi jam menit detik
// Jam
const jam = Math.floor(jsLanjut / 3600);
jsLanjut = jsLanjut - jam * 3600;
// Menit
const menit = Math.floor(jsLanjut / 60)
// Detik
const detik = Math.floor(jsLanjut - menit * 60)

// Simpan di DOM
const durasi = document.querySelector('.total-durasi');
durasi.textContent = `${jam} Jam, ${menit} Menit, ${detik} Detik.`

// Jumlah video
const jumlah = list.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length;

const jumlahVideo = document.querySelector('.jumlah-video')
jumlahVideo.textContent = `${jumlah} Video.`