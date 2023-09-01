import { useState } from 'react';

const Data = (props) => {

    const [name, setName] = useState("");

    const onChange = (e) => {
        setName(e.target.value);
    };

    const submitForm = (e) => {
        e.preventDefault();
        props.data(name);
    }

    return (
        <>
            <form>
                <input type="text" onChange={onChange} />
                <button onClick={submitForm}>SUBMIT</button>
            </form>
        </>
    )
}
export default Data;