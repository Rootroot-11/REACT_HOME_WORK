export default function AllGenres({genres}) {

    return (

        <div>
            Genres:
            {
                genres.map((value) => <div>
                    <h3>ID</h3> {value.id}
                </div>
                )
            }
        </div>
    );
}