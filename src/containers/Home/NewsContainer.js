import React, { Component } from 'react';
import { ContentWrapper } from 'components/User'
import styled from 'styled-components';
import axios from 'axios';

//구독 정보를 모두 보내주는 컨테이너 기능

const BorderBox = styled.div`
    width: 1000px;
    height: 1300px;
    background: #EEEEEE;
`;

const Contents = styled.div`
    height: 100%;
    display: flex;

`;

class NewsContainer extends Component {

render() {
    return (
        <div>
            <BorderBox>
                <Contents>
                    <ContentWrapper title='Uber' query='uber'>
                    </ContentWrapper>

                    <ContentWrapper title='Kakao Mobility' query='kakao'>
                    </ContentWrapper>

                    <ContentWrapper title='Taxi Industry' query='taxi'>
                    </ContentWrapper>

                </Contents>
            </BorderBox>

        </div>
    );
    }
}

export default NewsContainer;