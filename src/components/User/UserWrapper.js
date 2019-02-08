//UserWrapper : 가장 바깥에 있는 유저 정보를 담아주는 컨테이너를 의미함

import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { Link } from 'react-router-dom';

//Styling

//맨 왼쪽에 정렬해야 함 - 헤더 바로 밑에 오게 위치시켰음

const Positioner = styled.div`
    height: 100%;
    position: absolute;
`;

//전체 박스의 크기조절
const BorderBox = styled.div`
    width: 300px;
    height: 1300px;
    background: white;
`;

//children이 들어가는 곳
const Contents = styled.div`
    padding: 2rem;
    height: 100%;
`;

//Object
const UserWrapper = ({children}) => (
    //<Positioner>
        <BorderBox>
            <Contents>
                {children}
            </Contents>
        </BorderBox>
    //</Positioner>
);

export default UserWrapper;