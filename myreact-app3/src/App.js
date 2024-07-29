import './App.css';
import MyName from './mydir/MyName';

function App() {
  return (
    <div className="App">
      Main<br />
      Component에서 사용하는 데이터는 props와 state 두개가 있다.<br />
      💟 props: 부모 컴포넌트가 자식 컴포넌트에 주는 값 (일방향) <br />
      💟 state: 컴포넌트 내부에서 선언하며 내부에서 값 변경 가능<br />
      🌟 props나 state 값이 변경되면 컴포넌트는 리렌더링된다.
      <hr />

      <MyName name="김밥밥(●'◡'●)" /* name이라는 props 값 전달 여긴 태그 내 주석 ●'◡'● */ />
    </div>
  );
}

export default App;
