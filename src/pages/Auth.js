//about 경로로 들어왔을 때 보여줄 개별 페이지

import React, { Component } from 'react';
import Menu from 'components/Menu';
import { AuthWrapper } from 'components/Auth'
import { Login, Register } from 'containers/Auth';
import { Route } from 'react-router-dom';

//Component로 불러올때는 {}

class Auth extends Component {
    
    render() {
        return (
            <AuthWrapper>
                <Route path="/auth/login/" component={Login}/>
                <Route path="/auth/register/" component={Register}/>
            </AuthWrapper>
        );
    }

}

export default Auth;