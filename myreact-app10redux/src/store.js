import { legacy_createStore as createStore } from "redux";

export default createStore(function(state, action){ // state: 데이터. action: 데이터에 가해지는 행위
    if(state === undefined){
        return {number:0}
    }
    if(action.type === 'INCREMENT'){
        return {...state, number:state.number + action.size}
    }
    return state
}, window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_EXTENSION__)

// createStore

// 1번째 매개변수 ✏️ reducer 함수: 애플리케이션 상태를 교체하는 함수. state와 action을 교체 후 반환
// 하는 일 (1) action 타입 분석 (2) 이전 상태 -> 다음 상태 교체 (3) 다음 상태 반환

// 2번째 매개변수 ✏️ REDUX_DEVTOOLS 사용을 위한 지정값