import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import PostDetails from "../PostDetails/PostDetails";

export default function Post({item, history}) {

    return (
        <div>
            {item.id} {item.title} - <Link to={{pathname: '/posts/' + item.id}}>post static details</Link>

            <Route path={'/posts/' + item.id} component={PostDetails}></Route>
        </div>
    );
}