import React, {useState} from 'react';
// Hook : class를 없이 function으로  상태값(state)과 
// 생명주기 기능을 사용 가능.    
// 함수형 컴포넌트로 상태값 접근과 자식 요소에 접근이 가능

//function HookTest(){

//}
const HookTest = () => {
    // 형식 : const or let  [state, setState] = useState(initialState)
    //     : const or let  [데이터, 데이터 변경함수] = useState(초기값)
    const  [count, setCount] = useState(0);
    // setCount는 아무거나 써도 상관없음
    return(
     <div>
        number : {count}&nbsp;
        <button onClick={() => setCount(count +1)}>증가 2</button>
    </div>
    );
};

export default HookTest;