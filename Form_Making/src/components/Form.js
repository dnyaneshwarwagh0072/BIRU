import { useState } from 'react';

const Form = () => {
    const [data, setData] = useState({
        fname: "",
        lname: "",
        email: "",
        number: ""
    })

    const onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setData((pre) => {
            console.log(pre.lname);
            if (name === 'firstName') {
                return {
                    fname: value,
                    lname: pre.lname,
                    email: pre.email,
                    number: pre.number
                }
            } else if (name === 'lastName') {
                return {
                    fname: pre.fname,
                    lname: value,
                    email: pre.email,
                    number: pre.number
                }
            } else if (name === "email") {
                return {
                    fname: pre.fname,
                    lname: pre.lname,
                    email: value,
                    number: pre.number
                }
            } else if (name === "phoneNumber") {
                return {
                    fname: pre.fname,
                    lname: pre.lname,
                    email: pre.email,
                    number: value
                }
            }
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        alert("Form Submitted Successfully");
    }
    return (
        <>
            <form onSubmit={onSubmit}>
                <h1>Hello {data.fname} {data.lname}</h1>
                <p>{data.email}</p>
                <h4>Contact no : {data.number}</h4>
                <input
                    type="text"
                    placeholder="FirstName"
                    onChange={onChange}
                    name='firstName'
                    value={data.fname}
                /><br />

                <input
                    type="text"
                    placeholder="LastName"
                    onChange={onChange}
                    name='lastName'
                    value={data.lname}
                /><br />

                <input
                    type="text"
                    placeholder="Email@.com"
                    onChange={onChange}
                    name='email'
                    value={data.email}
                /><br />

                <input
                    type="phoneNumber"
                    placeholder="Mobile Number"
                    onChange={onChange}
                    name='phoneNumber'
                    value={data.number}
                /><br />

                <button>Submit</button>
            </form>
        </>
    )
}
export default Form;