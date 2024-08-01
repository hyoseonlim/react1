import React from "react";
import PrettyMain from "./exam/Main";
import Gugudan from "./exam/Gugudan.js";
import JikwonInfo from "./exam/JikwonInfo";

import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="App">
        <h2>라우트 연습용 메인 화면</h2>
        <PrettyMain />
        

        <hr />
        {/* 메뉴 작성 : 라우팅 연습 */}
        <nav>
        {/* Link는 <a>tag(Hyperlink)로 전환 : 요청명 개념으로 이해 */}
        <Link to="/">메인</Link> | {/* 아래의 Route path(/)와 매핑된다. 루트 요청이 들어오면 element의 MyTest가 수행된다. */}
        <Link to="/gugudan">구구단</Link> | 
        <Link to="/jikwoninfo">직원정보</Link>
        </nav><br/><br/>

        <Routes>
          {/* 컴포넌트에서 동적 라우팅 구현 가능 */}
          <Route path="/gugudan" element={<Gugudan/>}></Route>
          <Route path="/jikwoninfo" element={<JikwonInfo/>}></Route>

        </Routes>
      </div>
    </Router>
  );
}

export default App;
