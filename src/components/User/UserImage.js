//유저의 등록 이미지 들어가는 부분

import React from 'react';
import styled from 'styled-components';
import rider from './rider.png' //나중에 경로설정 변경해주어야 함

//Styling
//overflow: hidden -> 넘어간 내용은 없애줌
const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 100px;
    background : black;
    margin-top: 50px;
    margin-right: auto;
    margin-left auto;
    overflow: hidden;
`;

//Component
const UserImage = ({children}) => (
    <div>
        <Circle>
            <img src={rider} alt='logo' style={{width:"auto", height:"100%"}}/>   
        </Circle>
    </div>
);

export default UserImage;