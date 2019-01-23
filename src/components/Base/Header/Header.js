//Base dir에는 헤더 컴포넌트, 유저 메뉴 등 서비스 유저인터페이스의 기본 사항을 넣어줌

import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
//import { shadow, media } from 'lib/styleUtils';

// 상단고정 부분 Styled Component 문법
const Positioner = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0px;
    width: 100%;
`;

//흰 배경, 내용 정렬
const WhiteBackground = styled.div`
    background: white;
    display: flex;
    justify-content: center;
    height: auto;
`;

//헤더 내용
const HeaderContents = styled.div`
    width: 1200px;
    height: 55px;
    display: flex;
    flex-direction: row;
    align-items: center;

    padding-right: 1rem;
    padding-left: 1rem;
`;

// 로고
const Logo = styled.div`
    padding-top: 3px;
    font-size: 1.4rem;
    letter-spacing: 2px;
    color: black;
    font-weight: bold;
    font-family: 'FF Clan';
`;

// 중간 여백
const Spacer = styled.div`
    flex-grow: 1;
`;

// 하단 그래디언트 테두리
const GradientBorder = styled.div`
    height: 3px;
    background: black;
    `;
//children이라는 js객체를 받아서 동적으로 렌더링
//로그인 상태에 따라 다른 결과물을 뱉기 위해서 children을 별도로 설정
const Header = ({children}) => {
    return (
        <Positioner>
            <WhiteBackground>
                <HeaderContents>
                    <Logo>Uber NewsUpdate</Logo>
                    <Spacer/>
                    {children}
                </HeaderContents>
            </WhiteBackground>
            <GradientBorder/>
        </Positioner>
    );
};

export default Header;
