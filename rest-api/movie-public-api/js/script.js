function searchMovie() {
    $('#movie-list').html('');
    $.ajax({
        url: 'http://omdbapi.com',
        type: 'get',
        dataType: 'json',
        data: {
            'apikey': '42020899',
            's': $('#search-input').val()
        },
        success: result => {
            if (result.Response == "True") {
                let movies = result.Search;
                $.each(movies, (i, movie) => {
                    $('#movie-list').append(`
                    <div class="col-4">
                        <div class="card ms-4" style="width: 18rem;">
                            <img src="${movie.Poster}" class="card-img-top">
                            <div class="card-body">
                                <h5 class="card-title">${movie.Title}</h5>
                                <h6 class="card-subtitle mb-2 text-muted">${movie.Year}</h6>
                                <a href="#" class="card-link see-detail" data-bs-toggle="modal" data-bs-target="#exampleModal" data-id="${movie.imdbID}">See Detail</a>
                            </div>
                        </div>
                    </div>
                    `);
                });
                $('#search-input').val('');
            } else {
                $('#movie-list').html(`
                <h1 class="text-center">${result.Error}</h1>
                `);
            }
        }
    });
}

$('#search-button').on('click', function () {
    searchMovie();
});

$('#search-input').on('keyup', function (e) {
    if (e.keyCode === 13) {
        searchMovie();
    }
});

$('#movie-list').on('click', '.see-detail', function () {
    $.ajax({
        url: 'http://omdbapi.com',
        dataType: 'json',
        data: {
            'apikey': '42020899',
            'i': $(this).data('id')
        },
        success: movie => {
            if (movie.Response === "True") {
                $('.modal-body').html(`
                        <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-4">
                                <img src="${movie.Poster}" class="img-fluid">
                            </div>
                            <div class="col-md-8">
                            <ul class="list-group">
                                <li class="list-group-item"><h3>${movie.Title}</h3></li>
                                <li class="list-group-item">Released : ${movie.Released}</li>
                                <li class="list-group-item">Genre : ${movie.Genre}</li>
                                <li class="list-group-item">Director : ${movie.Director}</li>
                                <li class="list-group-item">Actors : ${movie.Actors}</li>
                                <li class="list-group-item">Plot : </li>
                                <li class="list-group-item">${movie.Plot}</li>
                          </ul>
                            </div>
                        </div>
                    `);
            }
        }
    });
});