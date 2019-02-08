import React, { Component } from 'react';
import axios from 'axios';
import { SubscriptionChecker, SubscriptionSubmit } from 'components/User';

//구독 정보를 모두 보내주는 컨테이너 기능

class SubscriptionContainer extends Component {

render() {
    return (
        <div>
            <SubscriptionChecker></SubscriptionChecker>
            <SubscriptionSubmit></SubscriptionSubmit>
        </div>
    );
    }
}

export default SubscriptionContainer;