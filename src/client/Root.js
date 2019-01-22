//브라우저에서 사용할 최상위 컴포넌트 Root.js

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from 'shared/App';

//라우터로 사용할 const 객체를 형성해둠
const Root = () => (
    <BrowserRouter>
        <App />
    </BrowserRouter>
);

export default Root;