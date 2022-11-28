import React, { useState } from 'react';

const Form = (props) => {
    // State for the input
    const [input, setInput] = useState('');

    // Submitting the form
    const submitHandler = (e) => {
        e.preventDefault();
        console.log("submitted");
        props.addAnimal(input);
    }

    // console.log(props);


    return (
        <fieldset>
            state input: {JSON.stringify(input)}
            <legend>Form.jsx</legend>

            <div >Form</div>
            <form onSubmit={submitHandler} >
                make an animal: <input onChange={(e) => {
                    setInput(e.target.value)
                }} />
                <button>submit</button>


            </form>
        </fieldset>
    )
}

export default Form;