import { useState, useEffect } from "react";

const Clock3 = () => {
    // useState로 state 초기화
    const [date, setDate] = useState(new Date());

    // useEffect를 사용하면 내부적으로 생명주기 메소드가 처리됨
    useEffect(() => {
        // 클래스의 componentDidMount()를 아래처럼 기술
        const timerID = setInterval(() => showSigan(), 1000)

        // 클래스의 componentWillUnmount()를 아래처럼 기술
        return () => {
            clearInterval(timerID);
        }
    }, []) // useEffect는 배열이 필수인 형식

    const showSigan = () => {
        setDate(new Date());
    }

    return(
        <div>
            <div>
                <b>🪻 지금은 {new Date().toLocaleTimeString()}</b>
                <h5>현재 시간은 {date.toLocaleTimeString()}</h5>
            </div>
        </div>
    );
}

export default Clock3;

// Clock2랑 비교해봐. this.setState랑 this.state 대신 뭘 썼게