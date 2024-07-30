import Clock1 from './exam/Clock1'
import Clock2 from './exam/Clock2';
import Clock3 from './exam/Clock3';
import MyComponent from './exam/MyComponent';
import MyComponent2 from './exam/MyComponent2';
import MyForm from './exam/MyForm';

 /*
    Mount: DOM 객체가 생성되고 브라우저에 나타나는 것을 의미
    마운트 메소드 호출 순서
    1) constructor: 컴포넌트 클래스의 생성자 함수로 컴포넌트 만들 때 처음으로 호출되는 함수
    2) getDerivedStateFromProps: props와 state값을 동기화할 때 사용하는 함수
    3) render: 컴포넌트의 기능과 모양새를 정의하는 함수로 리액트 요소를 반환
    4) componentDidMount: 컴포넌트를 생성하고 첫 렌더링이 끝났을 때 호출되는 함수
*/

function App() {
  return (
    <>
      <h3>리액트 생명주기 연습용: 디지털 시계</h3>
      <h2>🕰️⏲️⏱️⏰⌚⏳⌛</h2>
      <Clock1 />
      <hr/>
      <Clock2 />
      <hr/>
      <Clock3 />
      <hr/>
      <MyComponent />
      <MyComponent2 />
      <hr/><hr/><hr/>
      생명주기와 상관없음. Form 작업(사용자와 웹 페이지 간 상호작용) 해보기<br/>
      <MyForm />
    </>
  );
}

export default App;
