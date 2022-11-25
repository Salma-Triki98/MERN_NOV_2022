import React, { useState } from 'react'



const CountFunction = (props) => {

    const [state, setState] = useState(0);
    const handleCount = () => {
        setState(state + 1)
    }
    return (
        <div>
            <h1>{state}</h1>
            <button onClick={() => { handleCount() }}>Click</button>
        </div>
    )
}

export default CountFunction