import React, {useEffect, useState} from 'react';
import '../App.css'
import icebear from '../icebear.png';
import icebear1 from '../icebear1.png';
import monkey from '../monkey.png';
import monkey1 from '../monkey1.png';

// function HookTest2(){
// ...
// }
//export default HookTest2;
// 아래와 같이 적을수도 있다.

/*
export default function HookTest2(){
    const [item, setItem] = useState(0); // 동적 변수
   
    const incrementItem = () => setItem(item +1);
    const decrementItem = () => setItem(item -1);

    // JSON 데이터
    let st = {color:'blue',textAlign:'center',fontSize:30}

    // jsx 문법 영역
    return(
        <div className='App'>
            <div>
                number : {item}&nbsp;
                 <button onClick={incrementItem}>증가</button>&nbsp;
                 // incrementItem는 해당함수 실행, incrementItem()는 해당함수 실행결과
                <button onClick={decrementItem}>감소</button>&nbsp;
            </div>

            //{ CSS style 적용 : style 속성값은 {key : 'value'}안에 적어준다 }
            <h1 className='blackbar'>리액트의 이해</h1>
            <h2 style={{color:'red'}}>ECMA에 대한 선행 학습 필요</h2>
            <h3 style={st}>CSS 적용 방식에 대한 이해</h3>
        </div>

    );
}
*/

export default function HookTest2(){
    const [item, setItem] = useState(0);  // 동적 변수
    
    const incrementItem = () => setItem(item + 1);
    const decrementItem = () => setItem(item - 1);
    
    let st = {color:'blue', textAlign:'center'};

    /* JSX 문법 적용 영역 */
    return(   
        <div className='App'>
            <div>
            number : {item}&nbsp;
            <button onClick={incrementItem}>증가</button>&nbsp;
            <button onClick={decrementItem}>감소</button>
            </div>   

            {/* CSS style 적용 : style 속성 값은 {key:'value'} 안에 적음 */}
            <h1 className='blackbar'>리액트의 이해</h1>
            <h2 style={{color:'red'}}>ECMA에 대한 선행 학습 필요</h2>
            <h3 style={st}>CSS 적용 방식에 대한 이해</h3>

            {/* 이미지 적용 1: src 폴더 내 파일 */}
            <div>
                <img src={icebear} alt='icebear 이미지' />
                <img src={icebear1} alt='icebear1 이미지' />
                <img src={monkey} alt='monkey 이미지' />
            </div>

            {/* 이미지 적용 2: CSS 파일의 background-img */}
            <div className='img_bg'></div>

            {/* 이미지 적용 3: public 폴더에 있는 파일 */}
            <img src={`${process.env.PUBLIC_URL}/imgs/pooh2.png`} alt='public 폴더 이미지'></img> {/* public 폴더 접근 .  백틱!*/}

        </div>

    );
}
