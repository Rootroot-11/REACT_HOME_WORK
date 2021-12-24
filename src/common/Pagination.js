import React, {useState} from 'react';
import styled from "styled-components";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
// import ChevronLeftIcon from '@material-ui/icons/ChevronLeft.js';

export const Pagination = ({page, total, setPage}) => {

    const [inputValue, setInputValue] = useState(page);

    const handleChange = e => {
        const value = e.target.value;
        if ((value < 1 || value > total) && value !== '') {
            setInputValue(page)
            return false;
        }
        setInputValue(value)
    }

    const handleEnter = e => {
        if (e.key === 'Enter') {
            setPage(+inputValue)
        }
    }

    const next = () => {
        setPage(page + 1)
        setInputValue(page + 1)
    }

    const previous = () => {
        setPage(page - 1);
        setInputValue(page - 1)
    }

    return (
        <PaginationWrapper>
            {page > 1 && <Arrow onClick={previous}></Arrow> }

            <Input type="number" placeholder={total} value={inputValue} onChange={handleChange} onKeyPress={handleEnter}/>

            {page <= total && <Arrow onClick={next}><ChevronRightIcon style={{fontSize: '40px'}}/></Arrow> }
        </PaginationWrapper>
    );
};

const PaginationWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 40px;
`;

const Input = styled.input`
  width: 60px;
  padding: 2px 4px;
  outline: none;
  border: 1px solid #dedede;
  border-radius: 3px;
  font-size: 17px;
  height: 30px;
  font-weight: 300;
  
`;

const Arrow = styled.div`
  font-size: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: #6d6d6d;
`;
