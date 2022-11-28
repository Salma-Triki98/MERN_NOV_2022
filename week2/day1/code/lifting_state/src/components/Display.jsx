import React from 'react'

const Display = (props) => {
    return (
        <fieldset>
            {/* <legend>Display.jsx</legend> */}
            {/* {JSON.stringify(props.animals)}*/}
            {
                props.animals.map((animal, idx) => {
                    return <li key={idx}>{animal}</li>
                })

            }
        </fieldset>
    )
}

export default Display