import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

//Styling

const SubscriptionSubmitBtn = styled.button`
    margin-top: 30px;
    padding: auto;
    background: black;
    width: 97%;
    height: 43px;
    line-height: 40px;
    color: white;
    font-family: 'FF Clan';
    font-weight: bold;
    font-size: 20px; 
    text-align: center;

    &:active {
        /* 마우스 클릭시 아래로 미세하게 움직임 */
        transform: translateY(2px);
    }
`;

//Component
const SubscriptionSubmit = ({children}) => (
    <div>
        <SubscriptionSubmitBtn>
            Update Subscription!
        </SubscriptionSubmitBtn>
    </div>
);

export default SubscriptionSubmit;