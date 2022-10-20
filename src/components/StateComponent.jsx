import React from "react";

class StateComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    render() {
        return (
            <div className="component">
                <h1 className="title">React Component</h1>
                <p>Quantity: <strong>{ this.state.count }</strong></p>
                <div className="buttons">
                    <button className="button" onClick={ () => this.setState({ count: this.state.count - 1 })}>-</button>
                    <button className="button" onClick={ () => this.setState({ count: this.state.count + 1 })}>+</button>
                </div>
            </div>
        );
    }
}

export default StateComponent;