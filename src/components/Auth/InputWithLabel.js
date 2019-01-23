import React from 'react';
import styled from 'styled-components';
import oc from 'open-color'

// 두 컴포넌트가 함께 있으면 여백을 준다
const Wrapper = styled.div`
    & + & {
        margin-top: 1rem;
    }
`;

const Label = styled.div`
    font-size: 1rem;
    color: black;
    margin-bottom: 0.25rem; 
`;

const Input = styled.input`
    width: 100%;
    border: 1px solid ${oc.gray[3]};
    outline: none;
    border-radius: 0px;
    line-height: 2.5rem;
    font-size: 1.2rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    ::placeholder {
        color: ${oc.gray[3]};
    };
`;

//컴포넌트 객체 형성
//rest안에는 onChange, type, name, value 등의 값을 넣어줄 수 있음 (여러가지 것들)
const InputWithLabel = ({label, ...rest}) => (
    <Wrapper>
        <Label>
            {label}
        </Label>
        <Input {...rest}/>
    </Wrapper>
);

export default InputWithLabel;