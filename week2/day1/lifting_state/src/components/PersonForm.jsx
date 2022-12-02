import React, { useState } from 'react'

const PersonForm = (props) => {// State for the input
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    // Submitting the form
    const submitHandler = (e) => {
        e.preventDefault();
        // console.log("submitted");
        // props.addPerson(input);
        const newPerson = {
            name,
            age
        }
        console.log(newPerson);
        props.setPeople([...props.people, newPerson]);
    }

    // console.log(props);


    return (
        <fieldset>
            state name: {JSON.stringify(name)}
            state age: {JSON.stringify(age)}
            <legend>Form.jsx</legend>

            <div >Form</div>
            <form onSubmit={submitHandler} >
                name: <input onChange={(e) => {
                    setName(e.target.value)
                }} />
                age: <input type="number" onChange={(e) => {
                    setAge(e.target.value)
                }} />
                <button>submit</button>


            </form>
        </fieldset>
    )
}

export default PersonForm