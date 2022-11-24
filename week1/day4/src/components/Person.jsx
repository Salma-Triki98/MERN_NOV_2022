import React, { Component } from 'react'

export default class Person extends Component {
    constructor(props) {
        super(props)
        // console.log(this.props)
        this.state = {
            person: this.props.person
        }
    }
    render() {
        return (
            <fieldset>
                <legend>Person.jsx</legend>
                <div>
                    {/* {this.state.person.name} */}
                </div>
            </fieldset>
        )
    }
}
