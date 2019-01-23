//상태관리를 위한 redux 구축
/*
Redux는 클라이언트의 종합적인 State를 관리하기 위한 아키텍쳐 방법론
어플리케이션의 state를 총괄하는 store라는 커다란 하나의 state가 존재한다
store의 state자체는 변경할 수 없고, 순수 함수인 리듀서로서만 새로운 형태로 변경시켜줄 수 있다
순서: dispatch(action) -> 리듀서 작동 -> store의 state 변경 -> 변경된 state가 state를 subscribe하는 컴포넌트에 전달됨
*/

import { Map } from 'immutable';
import { handleActions, createAction } from 'redux-actions';

const SET_HEADER_VISIBILITY = 'base/SET_HEADER_VISIBILITY';

export const setHeaderVisibility = createAction(SET_HEADER_VISIBILITY); //make it visible

const initialState = Map({
    header: Map({
        visible: true
    })
});

export default handleActions({
    [SET_HEADER_VISIBILITY]: (state, action) => state.setIn(['header', 'visible'], action.payload)}
    ,initialState);
