import React from "react";

const genres = [
    { title: "Crime", value: 0 },
    { title: "Documentary", value: 1 },
    { title: "Horror", value: 2 },
    { title: "Comedy", value: 3 },
]

class PureComponent extends React.PureComponent {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="component">
                <h1 className="title">Pure Component</h1>
                <div className="select-input-container">
                    <select className="select-input">
                        <option value="">Select Genre</option>
                        { genres.map( item => (
                            <option key={ item.value } value={ item.value }>{ item.title }</option>
                        ) ) }
                    </select>
                    <div className="select-input-row"></div>
                </div>
            </div>
        );
    }
}

export default PureComponent;