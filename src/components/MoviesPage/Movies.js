import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Movie} from "../Movie/Movie";
import {discoverGenre, discoverMovie} from "../../services/service.api/movieService";
import {getGenres, getMovies} from "../../redux/actions/actions";
import './Movies.css';
import {MoviesWrapper} from "./styled";
import Header from "../header/Header";
import {Footer} from "../Footer/Footer";

export default function Movies() {

    let {users} = useSelector(({rootReducer}) => rootReducer);
    const dispatch = useDispatch();
    const [totalPages, setTotalPages] = useState(0);
    const [page, setPage] = useState(1);

    useEffect(() => {
        discoverMovie(page,4).then(value => {
            dispatch(getMovies(value.data));
            setTotalPages(value.total_pages)
        });
    }, [page])

    const paginationHandler = (num) => {
        setPage(page + num)
    };

    useEffect((genres) => {
        discoverGenre().then(value => {
            dispatch(getGenres(value.data));
        })
    }, [dispatch]);

    const [value, setValue] = useState('');
    const filteredMovies = users.filter(user => {
        return user.title.toLowerCase().includes(value.toLowerCase())
    });

    return (
        <div>
            <Header setValue={setValue}/>
            <MoviesWrapper>
                {
                    filteredMovies.map(value => <Movie key={value.id} value={value}/>)
                }
            </MoviesWrapper>
            <Footer
                totalPages={totalPages}
                page={page}
                paginationHandler={paginationHandler}/>
        </div>
    );
}
