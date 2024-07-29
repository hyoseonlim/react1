import './App.css';
import React, { useState } from 'react';

function App() {
  // 일반 데이터
  let irum = '🌷JSX 사용법: 일반 데이터🌻'

  // state 데이터
  // state는 React 변수다. const, let 등으로 선언한 변수와 달리 값이 변하면 관련 컴포넌트들이 재렌더링되어 화면이 바뀜
  let [jemok1, setJemokFunc1] = useState('자바스크립트'); // 문자열 기억
  let [jemok2, setJemokFunc2] = useState(['리액트','뷰']); // 배열 자료 기억

  // 이벤트 처리 1
  function dataUpdate(){
    //let newArr = [...jemok1]; // 전개연산자에 의해 문자열이 낱개 문자로 분리되어 배열로 복사
    //console.log(newArr);
    jemok1 = '안녕';
    setJemokFunc1(jemok1); // jemok state는 setJemokFunc 함수로 값 수정
    console.log(jemok1);
  }

  function dataUpdate2(){
    let newArr = [...jemok2]; // 전개연산자에 의해 문자열이 낱개 문자로 분리되어 배열로 복사
    console.log(newArr);
    newArr[1] = "뷰 화이팅" // newArr[1] 값 변경
    setJemokFunc2(newArr); // jemok2 값을 변경하기 위해 setJemokFunc2 함수 사용
  }

  // 이벤트 처리 함수 2
  let [count, setCount] = useState(0);



  return (
    <div className="App">
      <div className='blue_bar'>
        <h1>React State 이해</h1>
      </div>

      <div className='list'>
        <h3>{jemok1}</h3>
        <p>state 확인</p>
        <button onClick={dataUpdate}>jemok 값 변경</button>
      </div>

      <hr />

      <div className='list'>
        <h3>jemok2[0]: {jemok2[0]}</h3>
        <h3>jemok2[1]: {jemok2[1]}</h3>
        <p>state 확인</p>
        <button onClick={dataUpdate2}>jemok2 값 변경</button>
      </div>

      <div className='list'>
        이모티콘 클릭: <span onClick={
          () => {setCount(count + 1)}}>💞🐻‍❄️💞</span>&nbsp;{count}번 클릭
      </div>
    </div>
  );
}

export default App;