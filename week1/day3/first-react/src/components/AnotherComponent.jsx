import React, { Component } from "react";

// class component
class AnotherComponent extends Component { // I want to inherit from parent called Component
    // we are using the parent constructor

    render() {
        console.log(this);

        console.log(this.props); //?(7) console log props
        //----------------------------------------------
        //? (8) Destructuring
        const { name } = this.props.person;
        // --------------------------------------------

        //?(4) We must declare and write js inside the render method
        const x = 5;
        return (
            //? (6) fieldset for visuals to see what renders
            <fieldset>
                <legend>AnotherComponent.jsx</legend>
                {/* //?(5) We can also use a fragment instead of div <> </> */}
                < div >
                    <div>Hello from anotherComponent.jsx</div>
                    <div>Hello from {this.props.person.name} {this.props.x}</div>
                    <div>Hello from {name}</div>

                    {/* <div>Hello from anotherComponent.jsx</div>
                    <div>Hello from anotherComponent.jsx</div>
                    <div>Hello from anotherComponent.jsx</div> */}
                </div >
            </fieldset>
        )
    }
}

// make sure you EXPORT so other files can use it
export default AnotherComponent;