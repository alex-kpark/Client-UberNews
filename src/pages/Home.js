//각 개별 라우트(라우팅 받아서 넘어온 페이지들이 위치하는 폴더)

import React, { Component } from 'react';
import { UserLogo, UserWrapper, UserImage, UserName } from 'components/User';
import { SubscriptionContainer } from '../containers/Home';
import { NewsContainer } from '../containers/Home';
import { NewsWrapper } from 'components/User'
import './Home.css'

//NewsContainer 미반영
class Home extends Component {

    state = {}

    /* 키워드 들에 대해서 여러개 보여줄 수 있는 기능 필요 */

    keywords = [
        {'keyword':'Uber'},
        {'keyword':'Kakao Mobility'},
        {'keyword':'Taxi'},
        {'keyword':'Shared Economy'}
    ]

    render() {

        console.log(this.keywords)
        return (
            <div className='batch_home'>
                <div>
                    <UserWrapper>
                        <UserLogo></UserLogo>
                        <UserImage></UserImage>
                        <UserName></UserName>
                        <SubscriptionContainer></SubscriptionContainer>
                    </UserWrapper>
                </div>
                <div>

                <div className='uber_news'>
                    <NewsContainer>  
                    </NewsContainer>
                </div>

                </div>

            </div>
            );
    }
}


export default Home;