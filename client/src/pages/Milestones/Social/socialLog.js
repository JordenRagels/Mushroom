import React, { useState } from "react";


function Ap() {
  const [aState, setAState] = useState({
    mood: "Not Yet",
    name: ["Smiles at People"],
    time: ''
  });
  const [bState, setBState] = useState({
    mood: "Not Yet",
    name: ["Can Self-Soothe for Short Periods"],
    time: ''
  });
  const [cState, setCState] = useState({
    mood: "Not Yet",
    name: ["Copies Movements and Facial Expressions"],
    time: ''
  });
  const [dState, setDState] = useState({
    mood: "Not Yet",
    name: ["Recognizes People Other Than Parents"],
    time: ''
  });
  const [eState, setEState] = useState({
    mood: "Not Yet",
    name: ["Responds to Other People's Emotions"],
    time: ''
  });
  const [fState, setFState] = useState({
    mood: "Not Yet",
    name: ["Likes to Look at Self in Mirror"],
    time: ''
  });
  const [gState, setGState] = useState({
    mood: "Not Yet",
    name: ["Can Clearly Distinguish Between Familiar People and Strangers"],
    time: ''
  });
  const [hState, setHState] = useState({
    mood: "Not Yet",
    name: ["Understands 'No'"],
    time: ''
  });
  const [iState, setIState] = useState({
    mood: "Not Yet",
    name: ["Has Favorite Toys"],
    time: ''
  });
  const [jState, setJState] = useState({
    mood: "Not Yet",
    name: ["Repeats Sounds and Actions to Get Specific Reactions"],
    time: ''
  });
  const [kState, setKState] = useState({
    mood: "Not Yet",
    name: ["'Helps' with Activities such as Dressing or Picking Out Books" ],
    time: ''
  });
 

  return (
    <div>
      <h1>Social Milestones</h1>
      <div className="card">
        <div>
          {aState.name}
        </div>
        <div>
          Status: {aState.mood}
        </div>
        <div>
          {aState.time}
        </div>
        <div className="btn-group">
          <button onClick={() => setAState({ ...aState, mood: "Achieved", time:Date.now() })} className="btn-success">
            Milestone Achieved!
          </button>
        </div>
      </div>
      <br></br>
      <div className="card2">
        <div>
          {bState.name}
        </div>
        <div>
          Status: {bState.mood}
        </div>
        <div>
          {bState.time}
        </div>
        <div className="btn-group">
          <button onClick={() => setBState({ ...bState, mood: "Milestone Achieved" , time: Date.now()})} className="btn-success">
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
          <button onClick={() => setCState({ ...cState, mood: "Milestone Achieved", time: Date.now() })} className="btn-success">
            Milestone Achieved!
  </button>
        </div>
      </div>
      <br></br>
      <div className="card4">
        <div>
          {dState.name}
        </div>
        <div>
          Status: {dState.mood}
        </div>
        <div>
          {dState.time}
        </div>
        <div className="btn-group">
          <button onClick={() => setDState({ ...dState, mood: "Milestone Achieved", time: Date.now() })} className="btn-success">
            Milestone Achieved!
  </button>
        </div>
      </div>
      <br></br>
      <div className="card5">
        <div>
          {eState.name}
        </div>
        <div>
          Status: {eState.mood}
        </div>
        <div>
          {eState.time}
        </div>
        <div className="btn-group">
          <button onClick={() => setEState({ ...eState, mood: "Milestone Achieved", time: Date.now() })} className="btn-success">
            Milestone Achieved!
  </button>
        </div>
      </div>
      <br></br>
      <div className="card6">
        <div>
          {fState.name}
        </div>
        <div>
          Status: {fState.mood}
        </div>
        <div>
          {fState.time}
        </div>
        <div className="btn-group">
          <button onClick={() => setFState({ ...fState, mood: "Milestone Achieved", time: Date.now() })} className="btn-success">
            Milestone Achieved!
  </button>
        </div>
      </div>
      <br></br>
      <div className="card7">
        <div>
          {gState.name}
        </div>
        <div>
          Status: {gState.mood}
        </div>
        <div>
          {gState.time}
        </div>
        <div className="btn-group">
          <button onClick={() => setGState({ ...gState, mood: "Milestone Achieved", time: Date.now() })} className="btn-success">
            Milestone Achieved!
  </button>
        </div>
      </div>
      <br></br>
      <div className="card8">
        <div>
          {hState.name}
        </div>
        <div>
          Status: {hState.mood}
        </div>
        <div>
          {hState.time}
        </div>
        <div className="btn-group">
          <button onClick={() => setHState({ ...hState, mood: "Milestone Achieved", time: Date.now() })} className="btn-success">
            Milestone Achieved!
  </button>
        </div>
      </div>
      <br></br>
      <div className="card9">
        <div>
          {iState.name}
        </div>
        <div>
          Status: {iState.mood}
        </div>
        <div>
          {iState.time}
        </div>
        <div className="btn-group">
          <button onClick={() => setIState({ ...iState, mood: "Milestone Achieved", time: Date.now() })} className="btn-success">
            Milestone Achieved!
  </button>
        </div>
      </div>
      <br></br>
      <div className="card10">
        <div>
          {jState.name}
        </div>
        <div>
          Status: {jState.mood}
        </div>
        <div>
          {jState.time}
        </div>
        <div className="btn-group">
          <button onClick={() => setJState({ ...jState, mood: "Milestone Achieved", time: Date.now() })} className="btn-success">
            Milestone Achieved!
  </button>
        </div>
      </div>
      <br></br>
      <div className="card11">
        <div>
          {kState.name}
        </div>
        <div>
          Status: {kState.mood}
        </div>
        <div>
          {kState.time}
        </div>
        <div className="btn-group">
          <button onClick={() => setKState({ ...kState, mood: "Milestone Achieved", time: Date.now() })} className="btn-success">
            Milestone Achieved!
  </button>
        </div>
      </div>
      <br></br>
      


    </div>
  );

}

export default Ap;

