// 회원가입 Component

import React, { Component } from 'react';
import { AuthContent, InputWithLabel, AuthButton, RightAlignedLink } from 'components/Auth';
import axios from 'axios';

class Register extends Component {

    //밑의 InputWithLabel 컴포넌트에서 보내준 정보들을 받아서 state에 넣어주면 좋을 듯
    state = {
        username: '',
        email: '',
        password: ''
    }

    //state로 입력된 데이터를 받아서 서버에 보내주는 기능을 할 것
    _requestRegister= () => {

        console.log(this.state)

        axios.post('http://127.0.0.1:8000/signup', {
            username : this.state.username,
            email: this.state.email,
            password: this.state.password
        })
        .then( response => { console.log(response)} )
        .catch( response => { console.log(response)} );

        this.setState({
            username: '',
            email:'',
            password:''
        })
    };

    render() {
        return(
            <AuthContent title="Sign Up Here">
                <InputWithLabel label="Name" name="name" placeholder="What's your name?" value={this.state.username}
                                onChange={(event)=>{
                                    this.setState({
                                        username: event.target.value})
                                    }
                                }/>

                <InputWithLabel label="Email" name="email" placeholder="Put Uber Email" value={this.state.email}
                                onChange={(event)=>{
                                    this.setState({
                                        email: event.target.value})
                                    }
                                }/>
                <InputWithLabel label="Password" name="password" placeholder="Password Here" value={this.state.password}
                                onChange={(event)=>{
                                    this.setState({
                                        password: event.target.value})
                                    }
                                }/>
                <AuthButton onClick={this._requestRegister}>Sign Up</AuthButton>
                <RightAlignedLink to="/auth/login">Log In</RightAlignedLink>
            </AuthContent>
        );
    }
}

export default Register;