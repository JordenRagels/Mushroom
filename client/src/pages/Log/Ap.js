import React, { useState } from "react";
import Timestamp from 'react-timestamp';
function Ap() {
  const [developerState, setDeveloperState] = useState({
     mood: "Not Yet",
    name: ["Follows Things With Eyes"],
    time: Timestamp
  });
  const[devState,  setDevState] = useState({
    mood: "Not Yet",
    name: [ "Begins to Get Bored When There is Not Enough Stimulation"]
  });
  const[cState,  setCState] = useState({
    mood: "Not Yet",
    name: [ "Responds to Affection"]
  });

  return (
    <div>
      <h1>Cognitive Milestones</h1>
      <div className="card">
        <div>
          {developerState.name}
        </div>
        <div>
          Status: {developerState.mood}
        </div>
        <div>
          {developerState.time}
        </div>
        <div className="btn-group">
          <button onClick={() => setDeveloperState({ ...developerState, mood: "Not Yet", Timestamp })} className="btn-danger">
          Not Yet Achieved
          </button>
          <button onClick={() => setDeveloperState({ ...developerState, mood: "Achieved" })} className="btn-success">
           Milestone Achieved!
          </button>
        </div>
      </div>
<br></br>
      <div className="card2">
        <div>
          {devState.name}
        </div>
        <div>
          Status: {devState.mood}
        </div>
        <div className="btn-group">
          <button onClick={() => setDevState({ ...devState, mood: "Not Yet" })} className="btn-danger">
           Not Yet Achieved
  </button>
          <button onClick={() => setDevState({ ...devState, mood: "Milestone Achieved" })} className="btn-success">
           Milestone Achieved!
  </button>
        </div>
      </div>
      <br></br>
      <div className="card3">
        <div>
          {cState.name}
        </div>
        <div>
          Status: {cState.mood}
        </div>
        <div className="btn-group">
          <button onClick={() => setCState({ ...cState, mood: "Not Yet" })} className="btn-danger">
           Not Yet Achieved
  </button>
          <button onClick={() => setCState({ ...cState, mood: "Milestone Achieved" })} className="btn-success">
           Milestone Achieved!
  </button>
        </div>
      </div>
    </div>
  );

}

export default Ap;
