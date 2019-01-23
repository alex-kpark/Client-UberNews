//브라우저에서 사용할 최상위 컴포넌트 Root.js

import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from 'shared/App';
import { Provider } from 'react-redux';

//라우터로 사용할 const 객체를 형성해둠
const Root = ({store}) => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Route path="/" component={App}/>
            </BrowserRouter>
        </Provider>
    );
};

export default Root;