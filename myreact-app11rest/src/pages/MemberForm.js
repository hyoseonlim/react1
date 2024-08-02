import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Member(){
    
    const navigate = useNavigate();
    const [state, setState] = useState({});

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]:e.target.value
        })
    }

    // 추가 버튼 클릭에 대한 이벤트 핸들러
    const handleSave = () => {
        // AJAX 요청 (POST 방식 = 추가!) 설정
        axios.post("/members", state)
        .then(res => {
            // 추가 후 목록보기
            if(res.data.isSuccess){ // JS가 지원하는, 데이터를 받는 변수 data에서 우리가 보냈던 isSucess 값 받기
                alert("추가 성공");
                navigate("/members") // 이벤트에 의해 페이지가 넘어가야 하므로 navigate 함수 사용
            }
        })
        .catch(err => {
            console.log(err);
        })
    }

    return(
        <>
            <h2>* 회원 입력 *</h2>
            <input onChange={handleChange} type="text" name="name" placeholder="이름"/><br/>
            <input onChange={handleChange} type="text" name="addr" placeholder="주소"/>
            <button onClick={handleSave}>추가</button>
        </>
    );
}