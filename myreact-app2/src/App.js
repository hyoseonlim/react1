
/*
class App extends Component{
  state ={
    count : 0
  };

  countUpdate(n){
    this.setState({count : n});
  };

  render(){
    const {count} = this.state;

    return(
      <div>
        number : {count}&nbsp;
        <button onClick={() => {
          this.countUpdate(count +1);
        }}>증가 1</button>
        <hr></hr>
        <HookTest></HookTest>
        <hr></hr>
       <HookTest2></HookTest2>
      </div>
    );
  }
}
*/

import React, { useState } from "react";
import HookTest from "./mydir/HookTest";
import HookTest2 from "./mydir/HookTest2";

// class App extends Component{ ... render(){... return ( JSX )}} 을
// function App(){ ... return( JSX )} 훅이 나와서 이렇게 쓸 수 있어.
// 화살표 함수로 아래와 같이 작성 가능!

const App = () => {
  const [count, setCount] = useState(0); // state 변수와 변화를 주는 함수, 초기치 부여하는 useState 함수

  const countUpdate = (n) => { // Event Handler Function 이벤트 처리 함수
    setCount(n); // 내장 함수 (함수 내 함수)
  };

  return (
    <>
      number : {count}&nbsp;
      <button onClick={() => countUpdate(count + 1)}>증가 1</button>
      <hr />
      <HookTest />
      <hr />
      <HookTest2 />
    </>
  );
};

export default App; // component는 반드시 export해야 index.js에서 import할 수 있어. (Javascript 문법)