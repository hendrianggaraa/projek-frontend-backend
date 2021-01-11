// menangkap pilihan computer
// megenerate bilangan random
function getPilihanComputer() {
    const comp = Math.random();
    if (comp < 0.34) return 'gajah';
    if (comp >= 0.34 && comp < 0.67) return 'orang';
    return 'semut';
}

// menentuan rules
function getHasil(comp, player) {
    if (player == comp) return 'SERI!';
    if (player == 'gajah') return (comp == 'orang') ? 'MENANG!' : 'KALAH';
    if (player == 'orang') return (comp == 'gajah') ? 'KALAH' : 'MENANG!';
    if (player == 'semut') return (comp == 'orang') ? 'KALAH' : 'MENANG!';
}

function putar() {
    const imgComputer = document.querySelector('.img-computer');
    const gambar = ['gajah', 'semut', 'orang'];
    let i = 0;
    // waktu saat itu
    const waktuMulai = new Date().getTime();

    // Setiap 0.1s ganti2 gambar
    setInterval(function () {
        if (new Date().getTime() - waktuMulai > 1000) {
            clearInterval;
            return;
        }
        imgComputer.setAttribute('src', 'img/' + gambar[i++] + '.png');
        // Menghindari i++ berlanjut terus menerus
        if (i == gambar.length) i = 0;
    }, 100);
}

const images = document.querySelectorAll('li img');
images.forEach(function (image) {
    image.addEventListener('click', function () {
        const pilihanComputer = getPilihanComputer();
        const pilihanPlayer = image.className;
        const hasil = getHasil(pilihanComputer, pilihanPlayer)
        // console.log('comp : ' + pilihanComputer);
        // console.log('player : ' + pilihanPlayer);
        // console.log('hasil : ' + hasil);

        // Panggil fungsi putar()
        putar();

        // Menunggu setelah putar() selama satu detik
        setTimeout(function () {
            // Ganti gambar komputer
            const imgComputer = document.querySelector('.img-computer');
            imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');

            // ambil info
            const info = document.querySelector('.info');
            info.innerHTML = hasil;
        }, 1000);


    });
});


/* const pGajah = document.querySelector('.gajah');
pGajah.addEventListener('click', function () {
    const pilihanComputer = getPilihanComputer();
    const pilihanPlayer = pGajah.className;
    const hasil = getHasil(pilihanComputer, pilihanPlayer)
    // console.log('comp : ' + pilihanComputer);
    // console.log('player : ' + pilihanPlayer);
    // console.log('hasil : ' + hasil);

    // Ganti gambar komputer
    const imgComputer = document.querySelector('.img-computer');
    imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');

    // ambil info
    const info = document.querySelector('.info');
    info.innerHTML = hasil;
});

const pOrang = document.querySelector('.orang');
pOrang.addEventListener('click', function () {
    const pilihanComputer = getPilihanComputer();
    const pilihanPlayer = pOrang.className;
    const hasil = getHasil(pilihanComputer, pilihanPlayer)
    // console.log('comp : ' + pilihanComputer);
    // console.log('player : ' + pilihanPlayer);
    // console.log('hasil : ' + hasil);

    // Ganti gambar komputer
    const imgComputer = document.querySelector('.img-computer');
    imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');

    // ambil info
    const info = document.querySelector('.info');
    info.innerHTML = hasil;
});

const pSemut = document.querySelector('.semut');
pSemut.addEventListener('click', function () {
    const pilihanComputer = getPilihanComputer();
    const pilihanPlayer = pSemut.className;
    const hasil = getHasil(pilihanComputer, pilihanPlayer)
    // console.log('comp : ' + pilihanComputer);
    // console.log('player : ' + pilihanPlayer);
    // console.log('hasil : ' + hasil);

    // Ganti gambar komputer
    const imgComputer = document.querySelector('.img-computer');
    imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');

    // ambil info
    const info = document.querySelector('.info');
    info.innerHTML = hasil;
}); */