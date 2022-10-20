import React from 'react';
import './App.css';

// Components
import StateComponent from './components/StateComponent';
import PureComponent from './components/PureComponent';
import FunctionalComponent from './components/FunctionalComponent';

function App() {
    return (
        <div className="container">
            <StateComponent />
            <PureComponent />
            <FunctionalComponent />
        </div>
    );
}

export default App;
