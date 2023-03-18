import styled from 'styled-components';

export const BaseButon = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: 'Open Sans', 'sans-serif';
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  transition: all 0.4s;
  
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`

export const GoogleSignInButton = styled(BaseButon)`
  background-color: #4285f4;
  color: white;
  
  &:hover {
    color: #357ae8;
    background-color: white;
    border: 1px solid black;
  }
`

export const InvertedButton = styled(BaseButon)`
  background-color: white;
  color: black;
  border: 1px solid black;
  
  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`