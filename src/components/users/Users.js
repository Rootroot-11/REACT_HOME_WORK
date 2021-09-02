import { useEffect, useState } from "react";
import User from "../user/User";
import { getUsers } from "../../services/users.api";
import { Route } from "react-router-dom";
import UserDetails from "../userdetails/UserDetails";

export default function Users(props) {
    const { match: { url }, history } = props;
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        getUsers().then(value => setUsers([...value]))
    },[]);

  return (
    <div>
        {
            users.map(value => <User history={history} item={value} key={value.id}/>)
        }

        <Route exact path={`${url}/:id`} component={UserDetails}/>
    </div>
  );
}
