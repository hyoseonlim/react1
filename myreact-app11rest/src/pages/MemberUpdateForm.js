import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function MemberUpdateForm(){
    // "/members/:num/edit" num 값 읽기
    const {num} = useParams(); // useParams 훅을 사용하여 URL 파라미터에서 num 값을 추출

    // 수정할 정보 state로 관리
    const [state, setState] = useState({
        num:0,
        name:"",
        addr:""
    });

    useEffect(() => {
        // AJAX 요청 (GET 방식) 설정: 수정할 자료 읽기
        axios.get("/members/" + num)
        .then(res => {
            // 서버로부터 응답된 데이터를 이용해서 state 수정
            // res.data는 {num:1, name:'공기밥', addr:'강남구'}
            setState(res.data)
        })
        .catch(err => {
            console.log(err);
        })   
    }, [num])
    // useEffect의 의존성 배열은 어떤 값이 변경될 때 효과를 다시 실행할지 결정. 
    // 배열 안의 값이 변경되면, useEffect가 재실행됩니다.
    // 예를 들어 [num]을 포함하면, num이 변경될 때마다 useEffect가 실행됩니다.
    
    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]:e.target.value
        })
    }

    const navigate = useNavigate();

    // 수정 버튼 클릭에 대한 이벤트 핸들러
    const handleSave = () => {
        // AJAX 요청 (POST 방식 = 수정!) 설정
        axios.put("/members/" + num, state)
        .then(res => {
            // 수정 후 목록보기
            if(res.data.isSuccess){ // JS가 지원하는, 데이터를 받는 변수 data에서 우리가 보냈던 isSucess 값 받기
                alert("수정 성공");
                navigate("/members") // 이벤트에 의해 페이지가 넘어가야 하므로 navigate 함수 사용
            }
        })
        .catch(err => {
            console.log(err);
        })
    }


    return(
        <>
            <h2>회원 정보 수정</h2>
            <div>
                <label for="name">이름: </label>
                <input onChange={handleChange} type="text" name="name" /><br/>
                <label for="addr">주소: </label>
                <input onChange={handleChange} type="text" name="addr" /><br />
                <button onClick={handleSave}>수정</button>
            </div>
        </>
    );
}