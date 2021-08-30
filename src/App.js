import {useEffect, useReducer} from "react";
import reducer from "./reducers/reducer";
import {getUsers} from "./services/user.api.service";
import Users from "./components/Users";

export default function App() {

    let [{users, posts}, dispatch] = useReducer(reducer,
        {users:[], posts: []});
    useEffect(async() => {
        let users = await getUsers();
        dispatch({type: 'GET_USERS', payload: users});
    }, []);
    return (
        <div>
            <Users items={users}/>
        </div>
    );
}
