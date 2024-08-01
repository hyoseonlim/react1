// useEffect : 부수 효과(side effects)를 수행하는 데 사용된다. 데이터 가져오기, 구독 설정, 수동 DOM 조작 등을 처리할 수 있다.
import React, {useState, useEffect} from "react";

// useEffect를 통해 AJAX처리
const MyAjax = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [jikwons, setJikwons] = useState([]);

    // fetch를 이용해 jsp자료(Apache Server) 읽기.. DOM, 외부데이터 처리
    // AJAX 처리 성공하면 isLoaded, items를 갱신

    // 기본 : SOP (Same Origin Policy, 동일 출처 정책)
    // 다른 출처의 리소스가 필요하다면 CORS(Cross Origin Resource Sharing)
    // A Server ↔ B Server는 CORS 에러가 나지 않는다.
    // CORS처리는 package.json에 등록 👉🏻 "proxy":"http://localhost:80"

    useEffect(() => {
        fetch("/web_react/jikwonlist.jsp", {method:'GET'})
        .then(res => {
            if(!res.ok) {
                throw new Error('network response was not ok');  // 실패하면 error message
            }
            return res.json(); // 성공하면 json으로 받아준다.
        })
        .then(
            // setIsLoaded 읽기
            (result) => {
                setIsLoaded(true);
                setJikwons(result.jikwons);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
    }, []);

    // error가 나면 에러 메세지를, isLoaded가 false이면 로딩 메세지를, 그 외에는 items를 출력(렌더링)한다.
    if(error) {
        return <div>ERROR : {error.message}</div>
    } else if(!isLoaded) {
        return <div>자료 수신중..</div>
    }else{
        return (
            <>
            <table>
                <tr>
                    <th>사번</th><th>직원명</th><th>부서명</th><th>직급</th>
                </tr>
                {jikwons.map(jikwon => (
                    <tr>
                        <td>{jikwon.no}</td>
                        <td>{jikwon.name}</td>
                        <td>{jikwon.buser}</td>
                        <td>{jikwon.jik}</td>
                    </tr>
                ))}
            </table>
            <div>인원수: {jikwons.length}</div>
            </>
        )   
    }
}
    
export default MyAjax;
