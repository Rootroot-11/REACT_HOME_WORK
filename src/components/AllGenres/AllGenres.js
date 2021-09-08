export default function AllGenres({genres_array}) {

    return (
        <div>
            Genres:
            {
                genres_array && genres_array.map((genre, i) => <i key={genre?.id || i}> - {genre?.name} -</i>)
            }
        </div>
    );
}