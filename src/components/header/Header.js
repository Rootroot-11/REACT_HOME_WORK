import React from 'react';
import {Link} from "react-router-dom";

import {HeaderContent, HeaderWrapper, LogoText, LogoWrapper} from "./styled";
import UserInfo from "./UserInfo/UserInfo";
import {Container} from "../../common";

const Header = () => {
    return (
        <HeaderWrapper>
            <Container>
                <HeaderContent>
                    <Link to={'/'}>
                        <LogoWrapper>
                            <img src='https://media.istockphoto.com/vectors/movie-reel-open-clapper-board-popcorn-cinema-icon-set-vector-id614856568' alt="Logo"/>
                            <LogoText>Corn<span>Film</span></LogoText>
                        </LogoWrapper>
                    </Link>
                    <UserInfo/>
                </HeaderContent>
            </Container>
        </HeaderWrapper>
    );
};

export default Header;
