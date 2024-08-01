import React, { useState } from 'react';

function App() {

  const [result, setResult] = useState('');

  const showName = (e) => {
    e.preventDefault();
    setResult("결과는 " + e.target.name.value);
  }

  return (
    <div className="App">     
      <form onSubmit={showName}>
        이름 입력: <input type="text" name="name"/>
        <input type="submit" value="확인" />
      </form>
      <div>{result}</div>
    </div>
  );
}

export default App;