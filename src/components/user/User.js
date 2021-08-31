import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import UserDetails from "../userdetails/UserDetails";

export default function User({item, history}) {
    let navigate = () => {
        history.push('/users/' + item.id,
            item
        )
    };
    return (
        <div>
            {/*{item.name} - <Link to={{pathname: '/users/' + item.id}}>user static details</Link>*/}

            {item.name} - <button onClick={navigate}>user details programmaticly</button>
            {/*<Route path={'/users/'+ item.id} component={UserDetails}></Route>*/}
        </div>
    );
}