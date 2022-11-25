import React, { useState } from 'react'


const FunctionalComp = (props) => {
    const [animal, setAnimal] = useState(props.animal)
    const [people, setPeople] = useState(props.people)
    return (

        <div>
            <p>{animal}</p>
            <p>{people}</p>
        </div>
    )
}

export default FunctionalComp