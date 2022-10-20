import React from 'react'

const FunctionalComponent = () => {
    return (
        <div className="component">
            <h1 className="title">Functional Component</h1>
            <div className="background-fc">
                <form className="search-input-container">
                    <input type="text" placeholder="What do you want to watch?" className="search-input" />
                    <button className="search-button" >Search</button>
                </form>
            </div>
        </div>
    )
}

export default FunctionalComponent