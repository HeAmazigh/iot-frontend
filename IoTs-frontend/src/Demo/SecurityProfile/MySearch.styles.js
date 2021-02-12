import styled from "styled-components";

export const SearchBarContainer = styled.div`
  position: relative;
  margin-right: 0.8rem;
`;

export const SearchIcon = styled.div`
  
  font-size: 16px;
  position: absolute;
  top: 8px;
  left: 8px;
`;

export const StyledSearchBarInput = styled.input`
  background: #fcfcfc;
  border: 0.05rem solid #ABB3C4;
  border-radius: 0.15rem;
  box-shadow: 0 0 0 1px transparent;
  min-width: 17rem;
  padding: 0.7rem 2.5rem;
  display: block;
  color: gray;
  &:focus {
    background: white;
    border-color: gray;
    box-shadow: 0 0 0 1px #ABB3C4 ;
  }
`;

export const StyledClearButton = styled.button`
  color: #748892;
  font-size: 18px;
  position: absolute;
  top: 8px;
  right: 250px;
  border:none;
  background: transparent;
  cursor: pointer;

  &:hover {
    color: white;
    border: 0.05rem solid #748892;
    background:#748892;
  }
`;


export const StyledClearButton1 = styled.button`
  color: white;
  font-size: 16px;
  position: absolute;
  top: 8px;
  right: 3px;
  min-width: 8rem;
  padding: 0.5rem 2rem;
  border: none;
  background: #748892;
  cursor: pointer;

  &:hover {
    color: white;
  }
`;