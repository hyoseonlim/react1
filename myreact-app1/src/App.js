import React, { Component } from 'react';
import './App.css';

// 클래스 컴포넌트. 조립식 프로그래밍 가능
class Subject extends Component{
  render(){
    return( // HTML 모양을 한 JSX야
      <header>
        <h1>머리글: 웹 문서</h1>
      </header>
    )
  }
}

// 함수 컴포넌트
function Welcome(props){ // App이 부모로 자식 Welcome을 부름
  return( // return 밖은 자바스크립트. 안은 JSX
    <div>
      안녕&nbsp;{props.who}
    </div>
  )
}

function App() {
  return (
    <div className="App">
      연습용
      <Subject></Subject> {/*컴포넌트 호출 */}
      <br/>
      <Welcome></Welcome>
      <br/>
      <Welcome who='박순대'></Welcome>
      <br/>
      <Welcome who='김밥밥'></Welcome>
    </div>
  );
}

export default App;
