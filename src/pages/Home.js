//각 개별 라우트(라우팅 받아서 넘어온 페이지들이 위치하는 폴더)

import React from 'react';
import Menu from 'components/Menu';

const Home = () => {
    return (
        <div>
            <Menu />
            <h2>
                Home
            </h2>
        </div>
    );
};

export default Home;