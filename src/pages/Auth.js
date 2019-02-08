//about 경로로 들어왔을 때 보여줄 개별 페이지를 간단하게 라우팅만 해주는 기능

import React, { Component } from 'react';
import { AuthWrapper } from 'components/Auth'
import { Login, Register } from 'containers/Auth';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import HeaderContainer from 'containers/Base/HeaderContainer';

//Component로 불러올때는 {}

const Fixer = styled.div`
    width: 100%;
    text-align: center;
`;

//<HeaderContainer></HeaderContainer> <- 헤더 넣을 때 포함
class Auth extends Component {
    
    render() {
        return (
                <div>
                    <AuthWrapper>
                        <Route exact path="/auth" component={Login}/>
                        <Route path="/auth/login" component={Login}/>
                        <Route path="/auth/register" component={Register}/>
                    </AuthWrapper>
                </div>

        );
    }

}

export default Auth;