import React from 'react';
import './App.css';
import Videos from './Videos';

function App() {
  return (
    <div className="app">
      <h1>Build Lets Spin</h1>
      <div className="app-videos">
        <Videos url="" user='Person' description='Bad Boy Shah Collection' song='Mercy'
                likes={1002} messages={120} shares={12}/>
        <Videos url="" user='Human' description='Bad Boy Shah LatestCollection' song='Move it Like'
                likes={1090} messages={140} shares={19}/>
      </div>
    </div>
  );
}

export default App;
