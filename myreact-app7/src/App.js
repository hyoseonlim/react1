import React,{useState} from "react";
import Child from "./mydir/Child";

function App() {
  // App 컴포넌트(함수)가 호출될 때 함수 내의 내용을 차례대로 수행(랜더링) 
  
  const [fatherAge, setFatherAge] = useState(33);
  const [childAge, setChildAge] = useState(3);

  const changFatherAge = () => { // 아빠 나이 이벤트 핸들러
    setFatherAge(fatherAge + 1);

  }

  const changChildAge = () => { // 자식 나이 이벤트 핸들러
    setChildAge(childAge + 1);

  }
  console.log('아빠 나이가 변경 됨 - 렌더링')

  const boxstyle = {border:'2px solid', padding:'10px'}

  return (
    <div style={boxstyle}>
    <h2>🐯 아빠(신기루님)</h2>
    <span>나이: {fatherAge}</span>&nbsp;&nbsp;
    <button onClick={changFatherAge}>아빠 나이 변경</button>
    <hr></hr>
    <Child irum={'신통해'} nai={childAge} />
    <button onClick={changChildAge}>자녀 나이 변경</button>
    
    </div>
  );
}

export default App;
