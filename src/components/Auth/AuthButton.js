import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { Link } from 'react-router-dom';


//button styling
const Wrapper = styled.div`
    margin-top: 1rem;
    padding-top: 0.6rem;
    padding-bottom: 5px;

    background: black;
    color: white;

    text-align: center;
    font-size: 1.25rem;
    font-weight: 500;

    cursor: pointer;
    user-select: none;
    transition: .2s all;

    text-decoration:none

    &:hover {
        background: grey;
    }

    &:active {
        background: white;
    }    
`;

const StyledLink = styled(Link)`
    text-decoration:none
`;


//Object
const AuthButton = ({children, to, onClick}) => (

    <StyledLink to={to}>
        <Wrapper onClick={onClick}>
            {children}
        </Wrapper>
    </StyledLink>
);

export default AuthButton;