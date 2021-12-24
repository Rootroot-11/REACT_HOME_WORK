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

const SearchBlock = styled.div`
  display: flex;
  justify-content: space-between;
  width: 300px;
  height: 30px;
  border-radius: 50px;
  background-color: ${props => (props.theme === true) ? theme.white : 'rgba(247, 246, 246, 0.47)'};
  border: ${props => (props.theme === true) ? '0' : '1px solid #e7e7e7'}; 
  padding: 3px 10px;
  margin-right: 8px;
  input {
    background-color: transparent;
    outline: none;
    border: none;
    width: 90%;
    border-radius: inherit;
    padding: 0 5px;
    
    @media (max-width: 435px){
      font-size: 13px;
    }
  }
  button {
    outline: none;
    border: none;
    background-color: transparent;
    color: #494949;
    cursor: pointer;
  }
  
  @media (max-width: 800px){
    width: 250px;
  }
  @media (max-width: 435px){
    width: 200px;
  }
  @media (max-width: 380px){
    width: 170px;
  }
  @media (max-width: 330px){
    width: 140px;
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
    , SearchBlock, Row
}
