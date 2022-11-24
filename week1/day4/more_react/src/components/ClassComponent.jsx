import React, { Component } from 'react'
import SubComponent from './SubComponent'
//------------------------------------------------
//? (1) Create a class component "rcc"
//? (2) Constructor takes "props" by default
//? (3) Create a state
//? (4) Synthetic Events
//? (5) Change a state variable
//? (6) Pass a complex object and change a value
//?.(7) this.setState() is async
//? (8) Create a sub component 
// ------------------------------------------------
class ClassComponent extends Component {
    // we didn't have a constructor before because we used the Component constructor
    constructor(props) {
        super(props)
        this.state = {
            bob: 6,
            alice: "hello",
            ben: this.props.num,
            person: this.props.person // (6)
        }
    }
    hi() {
        // console.log("hello!!! from method");
        // this.state.bob++;
        this.setState({
            bob: this.state.bob + 1,
            // ben: this.state.ben + 1
            person: {
                ...this.state.person,
                age: this.state.person.age + 1
            }
        }, () => console.log(this.state.person.age)) // this.setState() takes an optional callback function
        // setting state is async
        //console.log(this.state.person.age);
    }

    render() {
        // console.log(this.props);
        return (
            <fieldset>
                <legend>ClassComponent</legend>
                <p>
                    whay is state? <br />
                    {JSON.stringify(this.state)}
                </p>
                <hr />
                {/* num from props: {this.props.num} */}
                <hr />
                {/* num from state: {this.state.ben} */}
                <hr />
                {/* bob from state: {this.state.bob} */}
                <hr />
                {/* //! it immediatly logs hello & and the click doesn't do anything!!
                <button onClick={console.log("hello")}>click me</button> */}
                {/*//* we need an anonymous callback function.  */}
                {/* <button onClick={() => { console.log("hello") }}>click me</button> */}
                <hr />
                <button onClick={() => { this.hi() }}>click me</button><br />
                <hr />
                person object age:
                <p>{this.state.person.age}</p>

                <SubComponent />
            </fieldset>
        )
    }
}

export default ClassComponent;