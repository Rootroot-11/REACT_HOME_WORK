import styled from "styled-components";
import {theme} from "../../constants/index";

const HeaderWrapper = styled.header`
  position: fixed;
  z-index: 40;
  top: 0;
  width: 100%;
  height: 9vh;
  box-shadow: ${props => (props.theme === true) ? theme.dark.headerShadow : theme.light.headerShadow};
  background-color: ${props => (props.theme === true) ? theme.black : theme.white};
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: inherit;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 45px;
    margin-right: 17px;
  }
`;

const LogoText = styled.p`
  font-size: 23px;
  letter-spacing: 0.4px;
  color: ${props => (props.theme === true) ? theme.white : '#343434'};
  
  span {
    padding: 0 4px;
    background-color: ${props => (props.theme === true) ? theme.dark.text : '#313131'};
    color: ${props => (props.theme === true) ? theme.black : theme.white};
    margin-left: 3px;
    border-radius: 3px;
  }
  @media (max-width: 435px) {
    display: none;
  }
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  width: 390px;
  @media (max-width: 800px){
    max-width: 330px;
  }
  @media (max-width: 435px){
    max-width: 240px;
  }
  @media (max-width: 380px){
    max-width: 207px;
  }
  @media (max-width: 330px){
    max-width: 160px;
  }
`;


export {
    HeaderWrapper, HeaderContent, LogoWrapper, LogoText
    , Row
}
