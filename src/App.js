import {useEffect} from "react";
import {discoverMovie} from "./service.api/movieService";
import {useDispatch, useSelector} from "react-redux";

export default function App() {
    let state = useSelector(state => state);
    let dispatch = useDispatch();
    let {users} = state;
    console.log(users)

 useEffect(()=>{
     discoverMovie().then(value => console.log(value.data.results))
 },[])
    return (
        <div>
            {
               users.map(results => <div>
                   <h3>id:</h3> {results.id}
                   <h3>original title:</h3> {results.original_title}


               </div>)
            }
        </div>
    );
}