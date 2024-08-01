import React from "react";
import MyTest from "./exam/Test"
import HiAbout from "./exam/About"
import Counter from "./exam/Counter";
import Input01 from "./exam/Input01";
import Input02 from "./exam/Input02";
import Multidata from "./exam/Multidata";
import MyAjax from "./exam/MyAjax";

import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="App">
        <h2>라우트 연습용 메인 화면</h2>
        <MyTest />

        <hr />
        {/* 메뉴 작성 : 라우팅 연습 */}
        <nav>
        {/* Link는 <a>tag(Hyperlink)로 전환 : 요청명 개념으로 이해 */}
        <Link to="/">Test 화면</Link> | {/* 아래의 Route path(/)와 매핑된다. 루트 요청이 들어오면 element의 MyTest가 수행된다. */} 
        <Link to="/about">About 보기</Link> |
        <Link to="/counter">친구 추가/삭제</Link> |
        <Link to="/input01">자료 입력01</Link> |
        <Link to="/input02">자료 입력02</Link> |
        <Link to="/multi">배열 자료</Link> |
        <Link to="/ajax">AJAX 요청</Link> |
        </nav>

        <Routes>
          {/* 컴포넌트에서 동적 라우팅 구현 가능 */}
          <Route path="/" element={<MyTest/>}></Route>
          <Route path="/about" element={<HiAbout/>}></Route>
          <Route path="/counter" element={<Counter/>}></Route>
          <Route path="/input01" element={<Input01/>}></Route>
          <Route path="/input02" element={<Input02/>}></Route>
          <Route path="/multi" element={<Multidata/>}></Route>
          <Route path="/ajax" element={<MyAjax/>}></Route>

        </Routes>
      </div>
    </Router>
  );
}

export default App;
