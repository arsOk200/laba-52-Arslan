import React from 'react';
import CardView from "./CardView";
function App() {

  return (
    <div className="App">
      <div className="playingCards faceImages">
        <CardView rank='q' suit='clubs' symbol={'♠'}/>
      </div>
    </div>
  );
}

export default App;
