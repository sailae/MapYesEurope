import './App.css';
import { render } from 'react-dom';
import React from 'react';

// This is where we build the main render of the map
// This should be a fairly short file and we do the actual building in other files
// The idea is to build components and then import them into this file

class App extends React.Component {
  render() {
    return (
      <div className="title">
        <h1>Map App</h1>
        <p>This is a subheading</p>
      </div>
    )
  }
}

export default App;
