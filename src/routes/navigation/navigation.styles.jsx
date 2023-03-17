import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin - bottom: 25px;
`

export const LogoContainer = styled(Link)`
    margin: 15px;
    box-sizing: content-box;
    transition: all 0.4s;
    &:hover {
        color: #32a5a5;
    }
`

export const NavLinks = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

export const NavLink = styled(Link)`
    padding: 10px 15px;
    cursor: pointer;
    transition: all 0.4s;
    &:hover {
        background-color: rgb(216, 212, 212);
    }
`