//AuthWrapper : 가장 바깥에 있는 큰 컨테이너(Wrapper)를 의미함

import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { Link } from 'react-router-dom';

//스타일링

//화면의 중앙에 위치

const Positioner = styled.div`
    width: 100%;
    margin-top: 35%;
    margin-left: 50%;
`;

//너비
const ShadowedBox = styled.div`
    width: 500px;
`;

//로고
const LogoWrapper = styled.div`
    background: black;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Logo = styled(Link)`
    color: white;
    font-family: 'FF Clan';
    font-size: 2.4rem;
    font-weight: bold;
    letter-spacing: 5px;
    text-decoration: none;
`;

// children 이 들어가는 곳
const Contents = styled.div`
    background: white;
    padding: 2rem;
    height: auto;
`;

//return해줄 컴포넌트
const AuthWrapper = ({children}) => (
    <Positioner>
        <ShadowedBox>
            <LogoWrapper>
                <Logo to="/">Uber</Logo>
            </LogoWrapper>
            <Contents>
                {children}
            </Contents>
        </ShadowedBox>
    </Positioner>
)

export default AuthWrapper;