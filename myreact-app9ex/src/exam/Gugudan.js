import React, { useState } from "react";

const Gugudan = () => {
    const [inputValue, setInputValue] =useState(''); 
    const [guguDan, setGuguDan] = useState([]);

    //입력한 값 받기
    const getgugu = (e) => {
        setInputValue(e.target.value);
    }

    //구구단 계산 및 출력
    const guguFunc = () => {
        const num = inputValue;
        const results = [];
        for(let g =1; g<10; g++){
            results.push(`${num} * ${g} = ${num*g}`);
        }
        setGuguDan(results);
    }

    
    return(
        <div>
            <br/>
            단 입력 : <input type="number" value={inputValue} onChange={getgugu}/>
            <button onClick={guguFunc}>확인</button>
            <br/>
            <h3>구구단</h3>
            <ul>
            {guguDan.map((result, index) => (
                <li key={index}>{result}</li>
            ))}
            </ul>
        </div>
    );
}

export default Gugudan;
