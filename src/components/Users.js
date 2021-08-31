import {useEffect, useState} from "react";
import User from "./user/User";
import {getUsers} from "../services/users.api";
import {Route} from "react-router-dom";
import StaticUserDetails from "./StaticUserDetails/StaticUserDetails";
import UserDetails from "./userdetails/UserDetails";

export default function Users(props) {
    let {match:{url}, history} = props;
    let [users, setUsers] = useState([]);
    useEffect(()=>{
        getUsers().then(value => setUsers([...value]))
    },[])
  return (
    <div>
        {users.map(value => <User history={history} item={value} key={value.id}/>)}

        {/*<Route exact path={`${url}/:id`} render={(props) => {*/}
        {/*    console.log(props);*/}
        {/*    let {history, location, match} = props;*/}
        {/*    return <StaticUserDetails {...props}/>*/}
        {/*}}/>*/}

        <Route exact path={`${url}/:id`} render={(props) => {

            return <UserDetails {...props}/>
        }}/>
    </div>
  );
}