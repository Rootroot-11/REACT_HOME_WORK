import {useLocation} from "react-router";


export default function MovieDetails({match: {params: {id}}}) {

    const {state} = useLocation();

    return (

        <div>
            {JSON.stringify(state)}

        </div>

    );
}

