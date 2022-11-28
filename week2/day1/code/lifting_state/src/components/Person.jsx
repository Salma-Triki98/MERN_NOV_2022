import React from 'react'

const Person = (props) => {
    return (
        <div>{JSON.stringify(props.person)}</div>
    )
}

export default Person