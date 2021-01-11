// event pada saat link di klik
$('.page-scroll').on('click', function (e) {

    // ambil isi href
    var tujuan = $(this).attr('href');
    // tangap elemen yang bersangkutan
    var elemenTujuan = $(tujuan);

    // console.log($('html').scrollTop());

    // Pindahkan scroll
    // $('html').scrollTop('700');
    //  $('html').scrollTop(elemenTujuan.offset().top);


    // console.log(elemenTujuan.offset().top);
    // $('html').animate({
    //     scrollTop: elemenTujuan.offset().top - 50
    // },'slow');

    // pindahkan scroll
    // $('body').scrollTop(elemenTujuan.offset().top);

    $('html').animate({
        scrollTop: elemenTujuan.offset().top - 50
    }, 1250, 'easeInOutExpo');

    e.preventDefault();

});

// parallax
// about
$(window).on('load', () => {
    $('.pKiri').addClass('pMuncul');
    $('.pKanan').addClass('pMuncul');
});


$(window).scroll(() => {
    var wScroll = $(this).scrollTop();

    // jumbotron
    $('.jumbotron img').css({
        'transform': 'translate(0px,' + wScroll / 4 + '%)'
    });

    $('.jumbotron h1').css({
        'transform': 'translate(0px,' + wScroll / 2 + '%)'
    });

    $('.jumbotron p').css({
        'transform': 'translate(0px,' + wScroll / 1 + '%)'
    });

    // portfolio
    if (wScroll > $('.portfolio').offset().top - 500) {
        $('.portfolio .thumbnail').each(i => {
            setTimeout(() => {
                $('.portfolio .thumbnail').eq(i).addClass('muncul');
            }, 300 * (i + 1));
        });
    }
});