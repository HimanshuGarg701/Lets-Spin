import React from 'react';
import './App.css';
import Videos from './Videos';

function App() {
  return (
    <div className="app">
      <h1>Build Lets Spin</h1>
      <div className="app-videos">
        <Videos />
        <Videos />
        <Videos />
      </div>
    </div>
  );
}

export default App;
