import { Link, Route } from "react-router-dom";
import PostDetails from "../PostDetails/PostDetails";

export default function Post({item}) {

    return (
        <div>
            {item.id} {item.title} - <Link to={{pathname: '/posts/' + item.id, state: item}}>post static details</Link>

            <Route path={'/posts/' + item.id} component={PostDetails}/>
        </div>
    );
}
