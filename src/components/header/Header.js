import React from 'react';
import {Link} from "react-router-dom";

import {HeaderContent, HeaderWrapper, LogoText, LogoWrapper, Row} from "./styled";
import UserInfo from "./UserInfo/UserInfo";
// import Menu from "../Menu/Menu";
// import Search from "./Search";
import {Container} from "../../common/Container";
import {useSelector} from "react-redux";

const Header = () => {
    const {theme} = useSelector(state => state);
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
                    <Row>
                        {/*<Search />*/}
                        {/*<Menu/>*/}
                    </Row>
                    <UserInfo/>
                </HeaderContent>
            </Container>
        </HeaderWrapper>
    );
};

export default Header;
