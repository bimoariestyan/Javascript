try {
    const inputKeyword = document.querySelector('.input-keyword');
    // keyword await menandakan bahwa function tersebut async
    const movies = await getMovies(inputKeyword.value)
    updateUI(movies);
} catch (err) {
    alert(err);
}
})

function getMovies(keyword) {
    return fetch('http://www.omdbapi.com/?apikey=cf567c7c&s=' + keyword)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText)
            }
            return response.json()
        })
        .then(response => {
            if (response.Response === "False") {
                throw new Error(response.Error);
            }
            return response.Search;
        })
}

function updateUI(movies) {
    let cards = '';
    movies.forEach(m => cards += showCards(m));
    const movieContainer = document.querySelector('.movie-container');
    movieContainer.innerHTML = cards;

}