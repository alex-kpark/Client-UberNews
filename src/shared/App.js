//shared/App.js는 서버와 클라이언트 모두가 공통으로 사용하는 컴포넌트가 위치해야 함
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Home, Auth } from 'pages';

class App extends Component {
    render(){
        return(
            <div>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={Auth}/>
            </div>
        );
    }
}

export default App;