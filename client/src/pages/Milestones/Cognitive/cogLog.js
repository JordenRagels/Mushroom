import React, { useState } from "react";
import { Doughnut } from 'react-chartjs-2'



function Ap() {
  const [aState, setAState] = useState({
    mood: "Not Yet",
    name: ["Follows Things With Eyes"],
    time: '',
    value: 1
  });
  const [bState, setBState] = useState({
    mood: "Not Yet",
    name: ["Begins to Get Bored When There is Not Enough Stimulation"],
    time: '',
    value: 1
  });
  const [cState, setCState] = useState({
    mood: "Not Yet",
    name: ["Responds to Affection"],
    time: '',
    value: 1
  });
  const [dState, setDState] = useState({
    mood: "Not Yet",
    name: ["Uses Hands and Eyes Together (Seeing a Toy and Reaching for It"],
    time: '',
    value: 1
  });
  const [eState, setEState] = useState({
    mood: "Not Yet",
    name: ["Brings Things to Mouth"],
    time: '',
    value: 1
  });
  const [fState, setFState] = useState({
    mood: "Not Yet",
    name: ["Shows Curiosity (Sees Things Out of Reach and Tries to Get It"],
    time: '',
    value: 1
  });
  const [gState, setGState] = useState({
    mood: "Not Yet",
    name: ["Passes Things from Hand to Hand"],
    time: '',
    value: 1
  });
  const [hState, setHState] = useState({
    mood: "Not Yet",
    name: ["Looks for Things When They Are Hidden"],
    time: '',
    value: 1
  });
  const [iState, setIState] = useState({
    mood: "Not Yet",
    name: ["Picks Up Things Between Thumb and Finger"],
    time: '',
    value: 1
  });
  const [jState, setJState] = useState({
    mood: "Not Yet",
    name: ["Watches the Path of Moving Things"],
    time: '',
    value: 1
  });
  const [kState, setKState] = useState({
    mood: "Not Yet",
    name: ["Interacts with Things in Various Ways (Shaking & Throwing Things)"],
    time: '',
    value: 1
  });
  const [lState, setLState] = useState({
    mood: "Not Yet",
    name: ["Pokes and Points with Index Finger"],
    time: '',
    value: 1
  });
  const [mState, setMState] = useState({
    mood: "Not Yet",
    name: ["Follows Simple Directions (Picking Up a Toy When Told To)"],
    time: '',
    value: 1
  });
  const [nState, setNState] = useState({
    mood: "Not Yet",
    name: ["Looks or Points at Things or Pictures of Things When They Are Named"],
    time: '',
  });
  const [oState, setOState] = useState({
    mood: "Not Yet",
    name: ["Uses Items Correctly (Drinks from Cup)"],
    time: ''
  });
  const [pState, setPState] = useState({
    mood: "Not Yet",
    name: ["Takes Things In and Out of Containers"],
    time: '',
    data: ""
  });

  return (
    <div>
      <h1>Cognitive Milestones</h1>
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
          <button onClick={() => setAState({ ...aState, mood: "Achieved", time: Date.now(), value: '' })} className="btn-success">
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
          <button onClick={() => setBState({ ...bState, mood: "Milestone Achieved", time: Date.now() })} className="btn-success">
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
      <div className="card14">
        <div>
          {nState.name}
        </div>
        <div>
          Status: {nState.mood}
        </div>
        <div>
          {nState.time}
        </div>
        <div className="btn-group">
          <button onClick={() => setNState({ ...nState, mood: "Milestone Achieved", time: Date.now() })} className="btn-success">
            Milestone Achieved!
  </button>
        </div>
      </div>
      <br></br>
      <div className="card15">
        <div>
          {oState.name}
        </div>
        <div>
          Status: {oState.mood}
        </div>
        <div>
          {oState.time}
        </div>
        <div className="btn-group">
          <button onClick={() => setOState({ ...oState, mood: "Milestone Achieved", time: Date.now() })} className="btn-success">
            Milestone Achieved!
         </button>
        </div>
      </div>
      <br></br>
      <div className="card16">
        <div>
          {pState.name}
        </div>
        <div>
          Status: {pState.mood}
        </div>
        <div>
          {pState.time}
        </div>
        <div className="btn-group">
          <button onClick={() => setPState({ ...pState, mood: "Milestone Achieved", time: Date.now() })} className="btn-success">
            Milestone Achieved!
             </button>
        </div>
      </div>

    </div>
  );

}

export default Ap;

