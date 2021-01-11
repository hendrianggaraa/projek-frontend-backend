function tampilkanSemuaMenu() {
    $.getJSON('data/pizza.json', data => {
        let menus = data.menu;
        $.each(menus, (i, menu) => {
            $('#daftar-menu').append('<div class="col-md-4"><div class="card mb-3" style="width: 18rem;"><img src="img/menu/' + menu.gambar + '" class="card-img-top"><div class="card-body"><h5 class="card-title">' + menu.nama + '</h5><p class="card-text">' + menu.deskripsi + '</p><h5 class="card-title">Rp ' + menu.harga + ',-</h5><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div>');
        })
    });
}

tampilkanSemuaMenu();

$('.nav-link').on('click', function () {
    $('.nav-link').removeClass('active');
    $(this).addClass('active');

    let kategori = $(this).html();
    $('h1').html(kategori);

    if (kategori == 'All Menu') {
        $('#daftar-menu').html('');
        tampilkanSemuaMenu();
        return;
    }

    $.getJSON('data/pizza.json', data => {
        let menus = data.menu;
        let content = '';
        $.each(menus, (i, menu) => {
            if (menu.kategori == kategori.toLowerCase()) {
                content += '<div class="col-md-4"><div class="card mb-3" style="width: 18rem;"><img src="img/menu/' + menu.gambar + '" class="card-img-top"><div class="card-body"><h5 class="card-title">' + menu.nama + '</h5><p class="card-text">' + menu.deskripsi + '</p><h5 class="card-title">Rp ' + menu.harga + ',-</h5><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div>';
            }
        });
        $('#daftar-menu').html(content);
    });
});