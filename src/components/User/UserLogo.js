import React from 'react';
import styled from 'styled-components';
import logo from './logo.png';

const LogoContainer = styled.div`
    width: 180px;
    height: auto;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
`;


const UserLogo = ({children}) => (
    <div>
        <LogoContainer>
            <img src={logo} alt='logo' style={{width:"100%", height:"auto"}}/>
        </LogoContainer>
    </div>
);

export default UserLogo;