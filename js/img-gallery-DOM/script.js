// Teknik Event Delegation -> target ke elemen pembungkus terluarnya
// const thumbs = document.querySelectorAll('.thumb');
const container = document.querySelector('.container');
const large = document.querySelector('.large');
const thumbs = document.querySelectorAll('.thumb');

container.addEventListener('click', function (e) {
    // cek apakah yg diklik adalah thum
    if (e.target.className == 'thumb') {
        // Ganti src large dengan src thumb yg terpilih
        large.src = e.target.src;
        large.classList.add('fade');
        // Menghilangkan class fade 0.5s
        setTimeout(function () {
            large.classList.remove('fade');
        }, 500);

        // Paksa semua menjadi kelas thumb
        thumbs.forEach(function (thumb) {
            /* if (thumb.classList.contains('active')) {
                thumb.classList.remove('active');
            } */
            thumb.className = 'thumb';
        });

        // Kemudian kasih kelas active
        e.target.classList.add('active');
    }
});