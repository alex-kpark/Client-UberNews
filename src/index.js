import React from 'react';
import ReactDOM from 'react-dom';
import Root from './client/Root'; //클라이언트를 나누어줄 Root를 import
import './index.css';
//import registerServiceWorker from './registerServiceWorker';
import * as serviceWorker from './serviceWorker';
import configureStore from 'redux/configureStore';

const store = configureStore();

//가장 최상위로 렌더링해주는 페이지가 Root가 되어야 함
ReactDOM.render(<Root store={store}/>, document.getElementById('root'));
//registerServiceWorker();
serviceWorker.unregister();
