import React from 'react';
import {useSelector} from "react-redux";

import {Avatar, UserName, UserSpace} from "./styled";

const UserInfo = () => {
    const {theme} = useSelector(state => state);
    return (
        <UserSpace>
            <Avatar>
                <img src="https://i.work.ua/sent_photo/9/e/6/9e6e3aa137130fd5d4ff228706e4b7ab.jpg" alt=""/>
            </Avatar>
            <UserName theme={theme}>George</UserName>
        </UserSpace>
    );
};

export default UserInfo;
