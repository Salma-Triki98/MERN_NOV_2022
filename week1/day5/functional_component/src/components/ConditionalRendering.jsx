import React, { useState } from 'react';

// Creating state for the dynamic parts of our app (inputs)
const ConditionalRendering = (props) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    // function triggered when pressing the submit button
    const handleSubmit = (e) => {
        e.preventDefault(e);
        const newPerson = { username, email, password };
        console.log(newPerson);
        setHasBeenSubmitted(true);
    };

    // conditional rendering 
    const formMessage = () => {
        if (hasBeenSubmitted) {
            return "Thank you for submitting the form!";
        } else {
            return "Welcome, please submit the form";
        }
    };


    return (
        <form onSubmit={handleSubmit} >
            <h3>{formMessage()}</h3>
            <p >{username}</p>
            <label>Username</label>
            <input onChange={(e) => { setUsername(e.target.value) }} /> <br />
            <label>email</label>
            <input onChange={(e) => { setEmail(e.target.value) }} /> <br />
            <label>password</label>
            <input onChange={(e) => { setPassword(e.target.value) }} /> <br />
            <input type="submit" value="Create User" />
        </form>
    );

};

export default ConditionalRendering;