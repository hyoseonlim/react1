import React from "react";
import Start from "./exam/StartMenu"
import Menu1 from "./exam/Menu1"
import Menu2 from "./exam/Menu2" // import해오는 이름은 맘대로 해도 돼
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router> {/* BrowserRouter을 Router라는 별명으로 import한 거 사용 */}
    <div className="App">
      <h2>✏️ 라우트 연습 (메뉴 작성) ✏️</h2>
      <nav>
        {/* Link는 a tag로 전환: 요청명 개념으로 이해하면 돼 */}
        <Link to="/goto1">메뉴1</Link> | &nbsp; 
        <Link to="/goto2">메뉴2</Link>
      </nav>

      <Routes>
        {/* 컴포넌트에서 동적 라우팅 구현 가능 */}
        <Route path="/" element={<Start/>}></Route>
        <Route path="/goto1" element={<Menu1/>}></Route>
        <Route path="/goto2" element={<Menu2/>}></Route>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
