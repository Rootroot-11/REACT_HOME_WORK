import styled from "styled-components";
import {theme} from "../../../constants";

const UserSpace = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled.div`
  border-radius: 50px;
  background-color: lightgrey;
  width: 40px;
  height: 40px;
  overflow: hidden;
  margin-right: 10px;
  
  img{
    width: inherit;
  }
`;

const UserName = styled.div`
  font-weight: 300;
  font-size: 17px;
  color: ${props => (props.theme === true) ? theme.white : theme.black};
  @media (max-width: 435px){
    display: none;
  }
`;

export {UserSpace, UserName, Avatar}
