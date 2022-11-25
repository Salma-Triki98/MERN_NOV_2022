import React, { useState } from 'react';


const Form = (props) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { username, email, password };
        console.log("Welcome", newUser);
        setUsername('')
        setEmail("")
        setPassword("")

    };

    return (
        <form onSubmit={createUser}>
            <div>
                <label>Username: </label>
                <input type="text" onChange={(e) => setUsername(e.target.value)} value={username} />
            </div>
            <div>
                <label>Email Address: </label>
                <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} />
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={(e) => setPassword(e.target.value)} value={password} />
                <p>{username}</p>
                <p>{email}</p>
                <p>{password}</p>
            </div>
            <input type="submit" value="Create User" />
        </form>
    );
};

export default Form;