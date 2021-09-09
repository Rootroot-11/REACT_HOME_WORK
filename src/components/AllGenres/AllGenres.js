export default function AllGenres({ genres_array }) {

    return (
        <div>
            Genres:
            {
                genres_array && genres_array.map((genre, i) => <ip key={genre?.id || i}>  {genre?.name}___</ip>)
            }
        </div>
    );

}