import React from "react";

// Member 컴포넌트
const Member = ({memberData}) => {
    return (
        <tr>
            <td>{memberData.name}</td>
            <td>{memberData.number}</td>
        </tr>
    )
}

// Main 컴포넌트
const Multidata = () => {
    const members = [
        {name:'관우', number:'111-1111'},
        {name:'장비', number:'222-2222'},
        {name:'유비', number:'333-3333'}
    ];

    return (
        <table border={1}>
            <thead>
                <tr>
                    <th>이름</th><th>번호</th>
                </tr>
            </thead>
            
            {/* 표현이 되는 곳 */}
            <tbody>
                {members.map((mem, index) => ( // 행 단위로 반복
                    <Member key={index} memberData={mem} />
                ))}  
                {/* 👆🏻배열 렌더링 시 각 요소에 고유 key를 추가 */}
            </tbody>
        </table>
    )
}
export default Multidata;
