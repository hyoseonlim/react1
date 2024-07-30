import { useState } from "react";

function MyForm(){
    const [formData, setFormData] = useState({
        irum:'',
        nai:'',
        menu:'cookie'
    })

    const dataChange = (e) => { // dataChange Event Handler
        const name = e.target.name; // form 태그 내 name
        const value = e.target.value;
        setFormData({
            ...formData,
            [name]:value
        })
    }

    const dataSubmit = (e) => {
        e.preventDefault(); // submit의 고유기능 해제
        const {nai} = formData; // formData 객체에서 나이 추출하여 nai 변수에 치환
        if(!Number(nai) || isNaN(Number(nai))){ // 나이 입력자료 검사
            alert('나이를 숫자로 입력하세요.');
        } else {
            alert('처리 성공');
        }
    }

    return(
        <>
            <b>결과: {formData.irum}, 넌 {formData.nai}살! 선택한 음식은 {formData.menu}</b>
            <form onSubmit={dataSubmit}>
                이름: <input type="text" name="irum" onChange={dataChange} /><br/>
                나이: <input type="text" name="nai" onChange={dataChange} /><br/>
                메뉴: 
                <select name="menu" value={formData.menu} onChange={dataChange}>
                    <option value="cake">케이크</option>
                    <option value="chicken">치킨</option>
                    <option value="pizza">피자</option>
                </select>
                <br/><br/>
                <button type="submit">전송</button>
             </form>
        </>
    );
}

export default MyForm;