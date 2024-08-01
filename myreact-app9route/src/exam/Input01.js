import React, {useState} from "react";

const Input01 = () => {
    const [txtValue, setTxtValue] = useState('');

    const changeFunc = (e) => {
        setTxtValue(e.target.value);
    }

    return (
        <div>
            <input type="text" value={txtValue} onChange={changeFunc} />
            <br /><br />
            입력값 : {txtValue}
        </div>
    )
}

export default Input01;