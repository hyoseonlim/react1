import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Member(){
    
    const [members, setMembers] = useState([]); // 배열로 초기화

    const refresh = () => { // AJAX 요청: GET 방식
        axios.get("/members")
        .then(res => {
            // 서버로부터 응답된 데이터를 이용해서 state를 수정
            setMembers(res.data);
        })
        .catch(err =>{
            console.log(err);
        })
    }

    useEffect(() => { // AJAX 요청 처리 시작
        refresh();
    }, [])

    // 삭제 버튼 클릭 시 이벤트 핸들러 함수
    const handleDelete = (num) => {
        axios.delete("/members/" + num)
        .then(res => {
            // 삭제 후 목록 보기
            refresh(); // 목록보기 함수 호출
        })
        .catch(err =>{
            console.log(err);
        })
    }

    // 페이지 이동 함수
    const navigate = useNavigate();
    // Link: 단순한 페이지 이동 시
    // useNavigate(): 특정 이벤트가 실행하면 동작하도록 하거나, 추가적인 로직 필요 시 사용
    
    return(
        <>
            <Link to="/">홈페이지</Link>&nbsp;&nbsp;
            <Link to="/members/new">회원 추가</Link><br/>
            <h1>회원 목록</h1>
            <table>
                <thead>
                    <tr>
                        <th>번호</th><th>이름</th><th>주소</th><th>수정</th><th>삭제</th>
                    </tr>
                </thead>
                <tbody>
                {members.map(member => 
                    <tr key={member.num}>
                        <td>{member.num}</td>
                        <td>{member.name}</td>
                        <td>{member.addr}</td>
                        <td>
                            <button onClick={() => {
                                navigate(`/members/${member.num}/edit`) // 백틱
                            }}>수정</button>
                        </td>
                        <td>
                            <button onClick={() => {
                                handleDelete(member.num)
                            }}>삭제</button>
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
        </>
    );
}