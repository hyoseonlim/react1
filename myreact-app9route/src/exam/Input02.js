import React, { useState } from "react";

const Input02 = () => {
    const [params, setParams] = useState({
        name: '',
        age: '',
        addr: ''
    });

    const { name, age, addr } = params;

    // 이벤트 핸들러
    const changeFunc = (e) => {
        const value = e.target.value;
        const id = e.target.id;

        setParams({
            ...params,
            [id]: value
        });
    }

    return (
        <div>
            <br />
            <div>
                <label for="name">이름 : </label>
                <input type="text" value={name} id="name" onChange={changeFunc} />
            </div>

            <div>
                <label for="age">나이 : </label>
                <input type="text" value={age} id="age" onChange={changeFunc} />
            </div>

            <div>
                <label for="addr">주소 : </label>
                <input type="text" value={addr} id="addr" onChange={changeFunc} />
            </div>

            <br />
            <h3>처리 결과</h3>
            <table border="1">
                <tbody>
                    <tr>
                        <td>이름은 {name}</td>
                        <td>나이는 {age}</td>
                        <td>주소는 {addr}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Input02;