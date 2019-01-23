import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { Link } from 'react-router-dom';

//디자인 형태를 styled-component로 만들어주고
//Link 컴포넌트는 스타일링 할 때 그대로 넣어주면 됨
const BorderedButton = styled(Link)`
    font-weight: 600;
    color: ${oc.cyan[6]};
    border: 1px solid ${oc.cyan[6]};
    padding: 0.5rem;
    padding-bottom: 0.4rem;
    cursor: pointer;
    border-radius: 2px;
    text-decoration: none;
    transition: .2s all;

    &:hover {
        background: ${oc.cyan[6]};
        color: white;
    }

    &:active {
        /* 마우스 클릭시 아래로 미세하게 움직임 */
        transform: translateY(3px);
    }

`;

//실제로 보내줘야 하는 컴포넌트는 const 형태로 디자인
const LoginButton = () => (
    <BorderedButton to="/auth/login">
        Sign In
    </BorderedButton>
)

export default LoginButton;