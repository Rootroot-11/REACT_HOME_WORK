import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import Users from "./components/users/Users";
import StaticUserDetails from "./components/StaticUserDetails/StaticUserDetails";
import Posts from "./components/posts/Posts";

export default function App() {
    return (
        <Router>
            <div>
                <Link to={'/users'}>users page</Link>
                <hr/>
                <Link to={'/posts'}>posts page</Link>
                <hr/>
            </div>
            <Route path={'/users'} component={Users}/>
            <Route path={'/posts'} component={Posts}/>

        </Router>


    );
}
