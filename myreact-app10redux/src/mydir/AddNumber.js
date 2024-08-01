import React, { Component } from "react";
import store from "../store";

export default class AddNumber extends Component{
    state = {size:1}

    render(){
        return(
            <div id="d">
                <h1>Add Number</h1>
                <input type="button" value="+"
                    onClick={function(){
                        store.dispatch({type:'INCREMENT', size:this.state.size}); {/* 여기만 바꿈 */}
                    }.bind(this)}></input>
                <input type="text" value={this.state.size} 
                    onChange={function(e){
                        this.setState({size:Number(e.target.value)});
                    }.bind(this)}></input>
            </div>


            /*
            <div id="d">
                <h1>Add Number</h1>
                ✏️ + 버튼 클릭 시 size 값이 상위 컴포넌트로 전달될 수 있게 onClick 구현
                ✏️ 현재 컴포넌트의 state인 size값을 전달하여 props로 전달받은 onClick 함수 호출
                ✏️ onClick 함수는 AddNumberSuper에서 작성
                <input type="button" value="+"
                    onClick={function(){ ✏️ 현재 컴포넌트의 onClick 구현
                        this.props.onClick(this.state.size); ✏️ 상위 컴포넌트의 onClick 호출
                    }.bind(this)}></input>
                <input type="text" value={this.state.size} 
                    onChange={function(e){
                        this.setState({size:Number(e.target.value)});
                    }.bind(this)}></input>
            </div>
            */

        );
    }
};