import React, {Component} from "react";

/*
class MyName extends Component{
    
    
    이 부분은 아래에 뺄 수 있어
    static defaultProps = { // props에 기본값 부여
        name:'기본 이름'
    }
    

    render(){
        return(
            <div>
                안녕! 내 이름은 <b>{this.props.name}</b>
            </div>
        );
    }
}

MyName .defaultProps = { // props에 기본값 부여
    name: '기본 이름'
}
*/

// 클래스를 함수로 소스 코드 변환 (위에는 클래스형, 여기는 함수형)

/*
1번 방법
function MyName(props){
    return(
        <div>
            안뇽 <b>{props.name}</b>
        </div>
    )
}
*/

// 2번 방법
const MyName = ({name}) => {
    return(
        <div>
            안뇽 <b>{name}</b>
        </div>
    )
}

export default MyName;