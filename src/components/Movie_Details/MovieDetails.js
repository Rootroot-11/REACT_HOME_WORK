
import {useLocation} from "react-router";
import {discoverMovie, getMovieByid} from "../../services/service.api/movieService";


export default function MovieDetails({match: {params: {id}}}) {
    const {state} = useLocation();
    // const [movieByID, setMovieByid] = useState({});
    // useEffect(() => {
    //     getMovieByid(id).then(value => setMovieByid({...value.data}));
    // }, [id]);
    //
    // document.body.style.backgroundImage = `url(https://image.tmdb.org/t/p/w500${movieByID.backdrop_path})`
    return (

        <div>
            {JSON.stringify(state)}

        </div>

    );
}

