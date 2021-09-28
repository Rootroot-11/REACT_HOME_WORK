import {useEffect, useState} from "react";
import User from "../user/User";
import {getUsers} from "../../services/user.service";

export default function Users() {

    let [users, setUsers] = useState([]);
    let [user, setUser] = useState(null);
    useEffect(() => {
        getUsers().then(value => setUsers([...value]))
    }, []);
    return (
        <div>
            <div>
                {
                    users.map(value => <User
                        key={value.id}
                        item={value}

                    />)
                }
            </div>

        </div>
    );
}
