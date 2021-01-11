const searchButton = document.querySelector('.search-button');
searchButton.addEventListener('click', async function () {
    try {
        const inputKeyword = document.querySelector('.input-keyword');
        const movies = await getMovies(inputKeyword.value);
        // console.log(movies);
        updateUI(movies);
    } catch (error) {
        // console.log(error);
        alert(error);
    }
});

function getMovies(keyword) {
    return fetch('http://www.omdbapi.com/?apikey=42020899&s=' + keyword)
        .then(response => {
            if (!response.ok) {
                // throw melempar ke catch
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then(response => {
            if (response.Response === 'False') {
                throw new Error(response.Error);
            }
            // console.log(response);
            return response.Search;
        });
}

function updateUI(movies) {
    let cards = '';
    movies.forEach(m => cards += showCard(m));
    const movieContainer = document.querySelector('.movie-container');
    movieContainer.innerHTML = cards;
}

// event binding : ngebanding event yg awalnya gak ada tp nantinya ada.
// e -> isinya posisi cursor terhadap document
// e.target -> isinya mernarget elemen yg diklik
document.addEventListener('click', async function (e) {

    try {
        if (e.target.classList.contains('modal-detail-button')) {
            // console.log('ok');
            const imdbid = e.target.dataset.imdbid;
            const movieDetail = await getMovieDetail(imdbid);
            updateUIDetail(movieDetail);
        }
    } catch (e) {
        alert(e);
    }
});

function getMovieDetail(imbdid) {
    return fetch('http://www.omdbapi.com/?apikey=42020899&i=' + imbdid)
        .then(response => {
            console.log(response);
            if (!response.ok) {
                // throw melempar ke catch
                throw new Error(response.statusText);
            }
            return response.json();
            // console.log(response);
        })
        .then(m => {
            console.log(m);
            if (m.Response === 'False') {
                throw new Error(m.Error);
            }
            return m;
        });
}

function updateUIDetail(m) {
    const movieDetail = showMovieDetail(m);
    const modalBody = document.querySelector('.modal-body');
    modalBody.innerHTML = movieDetail;
}

function showCard(movie) {
    return `<div class="col-sm-3 my-3">
        <div class="card">
            <img src="${movie.Poster}" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">${movie.Title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${movie.Year}</h6>
                <a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal" data-bs-target="#movieDetailModal" data-imdbid="${movie.imdbID}">Show Details</a>
            </div>
        </div>
    </div>`;
}

function showMovieDetail(movie) {
    return `<div class="container-fluid">
    <div class="row">
        <div class="col-sm-4">
            <img src="${movie.Poster}" class="img-fluid">
        </div>
        <div class="col-sm">
            <ul class="list-group">
                <li class="list-group-item">
                    <h4>${movie.Title} (${movie.Year})</h4>
                </li>
                <li class="list-group-item"><strong>Director : </strong> ${movie.Director}</li>
                <li class="list-group-item"><strong>Actors : </strong> ${movie.Actors}</li>
                <li class="list-group-item"><strong>Writer : </strong> ${movie.Writer}</li>
                <li class="list-group-item"><strong>Plot : </strong><br> ${movie.Plot}</li>
            </ul>
        </div>
    </div>
</div>`;
}