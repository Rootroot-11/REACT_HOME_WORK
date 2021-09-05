const movie_Details = () => {
    return fetch('https://developers.themoviedb.org/3/movies/get-movie-details')
        .then(value => value.json())
};
export {movie_Details}
