// 서브라우트 Login 등이 들어가는 부분

import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

//스타일링
const Title = styled.div`
    font-size: 1.5rem;
    font-weight: 500;
    color: black;
    margin-bottom: 1rem;
`;

//컴포넌트
const AuthContent = ({title, children}) => (
    <div>
        <Title>
            {title}
        </Title>
        {children}
    </div>
);

export default AuthContent;