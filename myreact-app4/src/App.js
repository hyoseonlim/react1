import React, {useState} from "react"; // {useState} 는 훅이여
import Subject from "./mydir/Subject";
import Welcome from "./mydir/Func"; // 이름 다르게 써도 돼
// function App() { // Main Function. 아래처럼 화살표 함수로 쓸 수도 있겠쥬?
const App = () => {
  const [subject, setSubject] = useState({title:'웹 문서', subtitle:'리액트 만만세'})
  const [friends] = useState([ // 수정 안할거니까 수정 함수 없이 변수만
    {bun:1, irum:'짱구', nai:6},
    {bun:2, irum:'맹구', nai:7}
  ]);
  
  const handleChangePage = () => {
    // friends 배열값 console에 출력
    friends.forEach(friend => {
      console.log(`${friend.bun}번 ${friend.irum}는 ${friend.nai}살`) // 백틱
    });
    
    setSubject(prevSubject => ({ // 이전 상태 변수 subject가 파라미터 prevSubject로
      ...prevSubject, // ... 전개 연산자(Spread Operator): destructuring. '복사'의 개념,,!
      title:'이건 버튼에 의해 변경된 제목'
    }));
  }

  return (
    <div className="App">
      이벤트 연습<br />
      <Subject
        title = {subject.title}
        subtitle = {subject.subtitle}
        changePage = {handleChangePage}
      />
      {/* title, subtitle, changePage: App에서 Subject 컴포넌트로 전달되는 props (변수들) */}

      <br />
      <Welcome
        title = {subject.title}
        subtitle = {subject.subtitle}
        friends = {friends}
        changePage = {handleChangePage}
      />
    </div>
  );
}

export default App;