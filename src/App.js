import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {addUser, loadUsers} from "./redux/actionCreators";
import {getUsers, saveUser} from "./services/api.service";




export default function App() {

    let state = useSelector(state => state);
    let dispatch = useDispatch();
    let {users} = state;

    useEffect(() => {
        getUsers().then(value => {
            console.log(value);
            dispatch(loadUsers(value));
        });
    }, []);

    let handleAddUser = async (e) => {
        let user = {name: 'vasysa'}
        saveUser(dispatch, user);
    };
    return (
        <div>

            <button onClick={handleAddUser}> add user</button>

            {users.map(value => <div>{value.name}</div>)}


        </div>
    );
}
