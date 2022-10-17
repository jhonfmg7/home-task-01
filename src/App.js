import React from 'react';
import './App.css';

// Components
import ReactComponent from './components/ReactComponent';
import PureComponent from './components/PureComponent';
import FunctionalComponent from './components/FunctionalComponent';

function App() {
    return (
        <div className="container">
            <ReactComponent />
            <PureComponent />
            <FunctionalComponent />
        </div>
    );
}

export default App;
