// 서브라우트로 활용할 Login, Register Component 제작
// component에서 실제 디자인이나 return할 객체는 모두 만들어두고, 컨테이너는 단순하게 넘겨주기만 하는 기능

import React, { Component } from 'react';
import { AuthContent, InputWithLabel, AuthButton } from 'components/Auth'
import { RightAlignedLink } from '../../components/Auth';
import axios from 'axios';
import { Redirect } from 'react-router-dom'

//HTML Element 보내주는 컴포넌트
class Login extends Component {

    state = {
        email: '',
        password: ''
    }

    //성공하면 다른 url로 이동시키면 됨
    _requestLogIn= () => {
        
        console.log(this.state)

        axios.post('http://127.0.0.1:8000/login', {
            email: this.state.email,
            password: this.state.password
        })
        .then( response => {
            console.log('success')
        })
        .catch( response => { console.log(response)} );

        this.setState({
            email: '',
            password: ''
        })
    }
;
    render() {
        return (
            <AuthContent title="Uber Login">
                <InputWithLabel label="Email" name="email" placeholder="email" 
                                value={this.state.email}
                                onChange={(event)=>{
                                    this.setState({
                                        email: event.target.value})
                                    }
                                }/>
                <InputWithLabel label="Password" name="password" placeholder="password"
                                value={this.state.password}
                                onChange={(event)=>{
                                    this.setState({
                                        password: event.target.value})
                                    }
                                }/>

                <AuthButton onClick={this._requestLogIn} to='/home' >Log In</AuthButton>
                <RightAlignedLink to="/auth/register">Not a member? Register!</RightAlignedLink>
            </AuthContent>
        );
    }
}

export default Login;