//컨테이너 안에 들어가는 각 항목 구독 내용

import React from 'react';
import styled from 'styled-components';


//구독 bar
const SubscriptionBar = styled.div`
    margin-top: 60px;
    margin-bottom: 30px;
    text-align: center;
    font-family: 'FF Clan';
    font-size: 25px;
    font-weight: bold;
`;

//항목들 포지션 조절
const CheckerContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding-left: 20px;
    padding-right: 20px;
    margin-bottom: 20px;
`;

//체크할 대상 이름
const CheckerName = styled.div`
    font-family: 'FF Clan';
    font-weight: normal;
    font-size: 20px;

`;

//체크할 대상 체크박스
//-webkit: 체크박스 크기 키우기
const CheckerInput = styled.input`
    -webkit-transform: scale(1.2);
    margin-right:20px; 

`;

//Componenet
const SubscriptionChecker = ({children}) => (
    <div>
            <SubscriptionBar>News Subsctiption</SubscriptionBar>
            <CheckerContainer>
                <CheckerName>Uber</CheckerName>
                <CheckerInput type='checkbox'/>
            </CheckerContainer>

            <CheckerContainer>
                <CheckerName>Kakao Mobility</CheckerName>
                <CheckerInput type='checkbox'/>
            </CheckerContainer>

            <CheckerContainer>
                <CheckerName>Shared Economy</CheckerName>
                <CheckerInput type='checkbox'/>
            </CheckerContainer>

            <CheckerContainer>
                <CheckerName>Taxi Industry</CheckerName>
                <CheckerInput type='checkbox'/>
            </CheckerContainer>
    </div>
);

export default SubscriptionChecker;