import React from 'react';
import styled from 'styled-components';

//Styling
const NameContainer = styled.div`
    width: 200px;
    margin-top: 50px;
    margin-right: auto;
    margin-left: auto;
    background: white;
    color: black;
    font-family: 'FF Clan';
    font-weight: bold;
    font-size: 40px;
    text-align: center;
`;

const AssociationContainer = styled.div`
    width: 200px;
    margin-top: 15px;
    margin-right: auto;
    margin-left: auto;
    background: white;
    color: black;
    font-family: 'FF Clan';
    font-weight: normal;
    font-size: 20px;
    text-align: center;
`;

//Component
const UserName = ({children}) => (
    <div>
        <NameContainer>
            Kyungho Park
        </NameContainer>

        <AssociationContainer>
            Uber Korea Technologies Inc.
        </AssociationContainer>

    </div>
)

export default UserName;