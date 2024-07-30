import React, {Component} from "react";

// state. props 값이 바뀌면 렌더링되니까 두번짼가 첫번째도 렌더링됨 어쩌구

class Clock2 extends Component{
    // 클래스형 컴포넌트는 props로 꼭 기본 constructor를 호출해야 함
    constructor(props){
        super(props)
        this.state = {date:new Date()}
    }

    showSigan(){
        this.setState({
            date:new Date() // date는 함수형으로 이야기하면 state임. class는 훅이없으니 요렇게
        })
    }

    componentDidMount(){ // 시스템(리액트)에 의한 콜백
        // setInterval(): 특정 코드를 일정 시간 간격을 두고 반복 호출 가능
        this.timerID = setInterval(() => this.showSigan(),1000);
    }

    // 컴포넌트 출력 자료가 DOM에 렌더링된 후에 실행되므로, 타이머 등의 작업을 하기에 적절한 메소드
    componentWillUnmount(){ // 시스템(리액트)에 의한 콜백
        // 사용된 메모리 등의 작업 마무리 필요
        // SPA 개발 시 메모리 누수(leak) 방지 작업 필요
        // 이를 componentWillUnmout에서 처리
        clearInterval(this.timerID); // setInterval() 해제
    }

    render(){
        return(
            <div>
                <b>🌻 지금은 {new Date().toLocaleTimeString()}</b>
                <h5>현재 시간은 {this.state.date.toLocaleTimeString()}</h5>
            </div>
        );
    }
}

export default Clock2;