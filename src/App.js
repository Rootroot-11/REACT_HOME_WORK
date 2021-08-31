// Є дві лінки
// /users //posts
// /users - робить все те, що було на занятті останнім способом (через кнопку та ддатковий запит на сервер)
//
// /posts
// Отримує posts з jsobplaceholder, виводить їх всі.
//     Біля кожного поста зробити лінку (не кнопку) яка буде вести на детальну інформацію поста. Детальну інформацію отримувати через history.state

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
