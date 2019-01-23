//Header Component의 상태를 관리하기 위한 컨테이너

import React, { Component } from 'react';
import Header from 'components/Base/Header';

class HeaderContainer extends Component {
    render() {
        return (
            <Header>
                Hi
            </Header>
        );
    }
}

export default HeaderContainer;