import React, { useState } from "react";
import Date from 'react-timestamp';
import TimestampButton from "./Timestamp";
import Moment from 'react-moment';
function Ap() {
  const [developerState, setDeveloperState] = useState({
    mood: "Not Yet",
    name: ["Follows Things With Eyes"],
    time: 1
  });
  const [devState, setDevState] = useState({
    mood: "Not Yet",
    name: ["Begins to Get Bored When There is Not Enough Stimulation"],
    time: 1
  });
  const [cState, setCState] = useState({
    mood: "Not Yet",
    name: ["Responds to Affection"],
    time: 1
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
        <div>
          {devState.time}
        </div>
        <div className="btn-group">
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
        <div>
          {cState.time}
        </div>
        <div className="btn-group">
          <button onClick={() => setCState({ ...cState, mood: "Milestone Achieved", time: 5 })} className="btn-success">
            Milestone Achieved!
  </button>
        </div>
      </div>


    </div>
  );

}

export default Ap;

