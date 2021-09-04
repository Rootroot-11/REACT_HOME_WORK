const getMovieGenres = () => {
    return fetch('https://developers.themoviedb.org/3/genre/movie/list')
        .then(value => value.json())
};

export {getMovieGenres};