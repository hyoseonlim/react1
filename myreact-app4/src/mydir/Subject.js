import React, { Component } from "react";

class Subject extends Component {
    render(){

        const clickHandler = () => {
            console.log('두번째 버튼 클릭 성공 🫧🐻‍❄️');
        }

        const keyUpHandler = (e) => { // Textbox의 keyUp 이벤트 핸들러
            console.log('텍스트 키업 이벤트 성공! 입력한 값은', e.target.value)
            console.log('😛메롱😝메롱😜');
        }

        return(
            <header>
                <h1>머리글: {this.props.title}</h1>
                <h4>{this.props.subtitle}</h4>

                button 이벤트: &nbsp;
                <button onClick={
                    function(){
                        this.props.changePage();
                    }.bind(this)
                }>{this.props.subtitle}</button>
                &nbsp;&nbsp;
                <button onClick={clickHandler}>두번째 버튼</button>
                
                <br /><br />
                <input type="text" onKeyUp={keyUpHandler} />
            </header>
        );
    }
}

export default Subject;