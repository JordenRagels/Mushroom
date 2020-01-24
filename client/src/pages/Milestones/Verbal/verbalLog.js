import React, { useState } from "react";


function Ap() {
  const [aState, setAState] = useState({
    mood: "Not Yet",
    name: ["Coos and Gurgles"],
    time: ''
  });
  const [bState, setBState] = useState({
    mood: "Not Yet",
    name: ["Turns Head Toward Sounds"],
    time: ''
  });
  const [cState, setCState] = useState({
    mood: "Not Yet",
    name: ["Simple Babbles"],
    time: ''
  });
  const [dState, setDState] = useState({
    mood: "Not Yet",
    name: ["Attempts to Copy Sounds with Babbles"],
    time: ''
  });
  const [eState, setEState] = useState({
    mood: "Not Yet",
    name: ["Develops Distinct Cries Depending on Needs (Hunger vs Pain)"],
    time: ''
  });
  const [fState, setFState] = useState({
    mood: "Not Yet",
    name: ["Strins Vowels Together While Babbling"],
    time: ''
  });
  const [gState, setGState] = useState({
    mood: "Not Yet",
    name: ["Responds to Name"],
    time: ''
  });
  const [hState, setHState] = useState({
    mood: "Not Yet",
    name: ["Begins to Make Consonant Sounds"],
    time: ''
  });
  const [iState, setIState] = useState({
    mood: "Not Yet",
    name: ["Picks Up Things Between Thumb and Finger"],
    time: ''
  });
  const [jState, setJState] = useState({
    mood: "Not Yet",
    name: ["Copies Sounds such as Animal Noises"],
    time: ''
  });
  const [kState, setKState] = useState({
    mood: "Not Yet",
    name: ["Has a Wide Variety of Babbles"],
    time: ''
  });
  const [lState, setLState] = useState({
    mood: "Not Yet",
    name: ["Speaks Simple Wordsr"],
    time: ''
  });
  const [mState, setMState] = useState({
    mood: "Not Yet",
    name: ["Sounds Change in Tone to Mimic Speech"],
    time: ''
  });
  

  return (
    <div>
      <h1>Verbal Milestones</h1>
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
      <div className="card12">
        <div>
          {lState.name}
        </div>
        <div>
          Status: {lState.mood}
        </div>
        <div>
          {lState.time}
        </div>
        <div className="btn-group">
          <button onClick={() => setLState({ ...lState, mood: "Milestone Achieved", time: Date.now() })} className="btn-success">
            Milestone Achieved!
  </button>
        </div>
      </div>
      <br></br>
      <div className="card13">
        <div>
          {mState.name}
        </div>
        <div>
          Status: {mState.mood}
        </div>
        <div>
          {mState.time}
        </div>
        <div className="btn-group">
          <button onClick={() => setMState({ ...mState, mood: "Milestone Achieved", time: Date.now() })} className="btn-success">
            Milestone Achieved!
  </button>
        </div>
      </div>
      <br></br>

    </div>
  );

}

export default Ap;

