import React, { Component } from "react";
import AddNumber from "./AddNumber";

export default class AddNumberSuper extends Component{
    render(){
        return(
            <div id="super">
                <h1>Add Number Super</h1>
                {/* AddNumber의 props로 매개변수가 size인 함수를 전달 */}
                {/* 해당 함수는 AddNumber의 + 버튼 클릭 시 AddNumber의 state.size 값 받아서 호출됨 */}
                {/* 그 값을 다시 상위 컴포넌트 App으로 전달해야 하기 때문에 */}
                {/* 상위 컴포넌트로부터 전달받은 props의 onClick 함수를 호출해서 size값 전달해야 함 */}
               
                             
                <AddNumber onClick={function(size){
                    this.props.onClick(size);
                }.bind(this)}></AddNumber>
                
            </div>
        );
    }
};