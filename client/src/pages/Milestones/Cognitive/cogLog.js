import React, { useState } from "react";
import { Doughnut } from 'react-chartjs-2';
import axios from 'axios';
//import { tsPropertySignature } from "@babel/types";

// const Name = prop => <div>{prop.children}</div>

function App() {
  const [aState, setAState] = useState({
    accomlished: "Not Yet",
    name: ["Follows Things With Eyes"],
    time: '',
  });

  const [bState, setBState] = useState({
    accomlished: "Not Yet",
    name: ["Begins to Get Bored When There is Not Enough Stimulation"],
    time: '',
  });

  const [cState, setCState] = useState({
    accomlished: "Not Yet",
    name: ["Responds to Affection"],
    time: '',
  });

  const [dState, setDState] = useState({
    accomlished: "Not Yet",
    name: ["Uses Hands and Eyes Together (Seeing a Toy and Reaching for It"],
    time: '',
  });

  const [eState, setEState] = useState({
    accomlished: "Not Yet",
    name: ["Brings Things to Mouth"],
    time: '',
  });

  const [fState, setFState] = useState({
    accomlished: "Not Yet",
    name: ["Shows Curiosity (Sees Things Out of Reach and Tries to Get It"],
    time: '',
  });

  const [gState, setGState] = useState({
    accomlished: "Not Yet",
    name: ["Passes Things from Hand to Hand"],
    time: '',
  });

  const [hState, setHState] = useState({
    accomlished: "Not Yet",
    name: ["Looks for Things When They Are Hidden"],
    time: '',
  });

  const [iState, setIState] = useState({
    accomlished: "Not Yet",
    name: ["Picks Up Things Between Thumb and Finger"],
    time: '',
  });

  const [jState, setJState] = useState({
    accomlished: "Not Yet",
    name: ["Watches the Path of Moving Things"],
    time: ''
  });

  const [kState, setKState] = useState({
    accomlished: "Not Yet",
    name: ["Interacts with Things in Various Ways (Shaking & Throwing Things)"],
    time: '',
  });

  const [lState, setLState] = useState({
    accomlished: "Not Yet",
    name: ["Pokes and Points with Index Finger"],
    time: '',
  });

  const [mState, setMState] = useState({
    accomlished: "Not Yet",
    name: ["Follows Simple Directions (Picking Up a Toy When Told To)"],
    time: '',
  });

  const [nState, setNState] = useState({
    accomlished: "Not Yet",
    name: ["Looks or Points at Things or Pictures of Things When They Are Named"],
    time: '',
  });
  const [oState, setOState] = useState({
    accomlished: "Not Yet",
    name: ["Uses Items Correctly (Drinks from Cup)"],
    time: ''
  });
  const [pState, setPState] = useState({
    accomlished: "Not Yet",
    name: ["Takes Things In and Out of Containers"],
    time: '',
  });


  function handleSubmit(event) {

    // TODO - validate!
    axios
      .post('/api/cognitive', {
        eyes: 1,
        bored: 1
      })
      .then(response => {
        console.log(response)
      })
  }

  const [zState, setZState] = useState({
    labels: [],
    datasets: [{
      data: [],
      backgroundColor: "#48665f",
    }]
  });
  console.log(zState.labels);
  console.log(zState.datasets);
  console.log(zState.datasets.length);
  console.log(zState.datasets[0].data);



  return (
    <div className='cogLog'>
      <h1>Cognitive Milestones</h1>
      <Doughnut data={zState} />
      <div className='cards'>

        <br></br>
        <div className='card1'>
        <div>

          {aState.name}
        </div>
        <div>
          Status: {aState.accomlished}
        </div>
        <div>
          {aState.time}
        </div>
        <div className="btn-group">
            <button onClick={() => { setAState({ ...aState, accomlished: "Milestone Achieved", time: Date().toString() }); setZState({ ...zState, labels: ['Milestone 1'], datasets: [{ data: [ 1] }] }); handleSubmit() }} className="btn-success">
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
            Status: {bState.accomlished}
          </div>
          <div>
            {bState.time}
          </div>
          <div className="btn-group">
            <button onClick={() => { setBState({ ...bState, accomlished: "Milestone Achieved", time: Date().toString() }); setZState({ ...zState, labels: ['Milestone 1', 'Milestone 2'], datasets: [{ data: [1, 1] }] }); handleSubmit() }} className="btn-success">
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
            Status: {cState.accomlished}
          </div>
          <div>
            {cState.time}
          </div>
          <div className="btn-group">
            <button onClick={() => { setCState({ ...cState, accomlished: "Milestone Achieved", time: Date().toString() }); setZState({ ...zState, labels: ['Milestone 1', "Milestone 2", 'Milestone 3'], datasets: [{ data: [ 1, 1, 1] }] }); handleSubmit() }} className="btn-success">
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
            Status: {dState.accomlished}
          </div>
          <div>
            {dState.time}
          </div>
          <div className="btn-group">
            <button onClick={() => { setDState({ ...dState, accomlished: "Milestone Achieved", time: Date().toString() }); setZState({ ...zState, labels: ['Milestone 1', "Milestone 2", 'Milestone 3', 'Milestone 4'], datasets: [{ data: [1, 1, 1, 1] }] }); handleSubmit() }} className="btn-success">
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
            Status: {eState.accomlished}
          </div>
          <div>
            {eState.time}
          </div>
          <div className="btn-group">
            <button onClick={() => { setEState({ ...eState, accomlished: "Milestone Achieved", time: Date().toString() }); setZState({ ...zState, labels: ['Milestone 1', "Milestone 2", 'Milestone 3', 'Milestone 4', 'Milestone 5'], datasets: [{ data: [1, 1, 1, 1, 1] }] }); handleSubmit() }} className="btn-success">
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
            Status: {fState.accomlished}
          </div>
          <div>
            {fState.time}
          </div>
          <div className="btn-group">
            <button onClick={() => { setFState({ ...fState, accomlished: "Milestone Achieved", time: Date().toString() }); setZState({ ...zState, labels: ['Milestone 1', "Milestone 2", 'Milestone 3', 'Milestone 4', "Milestone 5", 'Milestone 6'], datasets: [{ data: [ 1, 1, 1, 1, 1, 1] }] }); handleSubmit() }} className="btn-success">
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
            Status: {gState.accomlished}
          </div>
          <div>
            {gState.time}
          </div>
          <div className="btn-group">
            <button onClick={() => { setGState({ ...gState, accomlished: "Milestone Achieved", time: Date().toString() }); setZState({ ...zState, labels: ['Milestone 1', "Milestone 2", 'Milestone 3', 'Milestone 4', "Milestone 5", 'Milestone 6', 'Milestone 7'], datasets: [{ data: [1, 1, 1, 1, 1, 1, 1] }] }); handleSubmit() }} className="btn-success">
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
            Status: {hState.accomlished}
          </div>
          <div>
            {hState.time}
          </div>
          <div className="btn-group">
            <button onClick={() => { setHState({ ...hState, accomlished: "Milestone Achieved", time: Date().toString() }); setZState({ ...zState, labels: ['Milestone 1', "Milestone 2", 'Milestone 3', 'Milestone 4', "Milestone 5", 'Milestone 6', 'Milestone 7', 'Milestone 8'], datasets: [{ data: [ 1, 1, 1, 1, 1, 1, 1, 1] }] }); handleSubmit() }} className="btn-success">
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
            Status: {iState.accomlished}
          </div>
          <div>
            {iState.time}
          </div>
          <div className="btn-group">
            <button onClick={() => { setIState({ ...iState, accomlished: "Milestone Achieved", time: Date().toString() }); setZState({ ...zState, labels: ['Milestone 1', "Milestone 2", 'Milestone 3', 'Milestone 4', "Milestone 5", 'Milestone 6', 'Milestone 7', 'Milestone 8', 'Milestone 9'], datasets: [{ data: [ 1, 1, 1, 1, 1, 1, 1, 1, 1] }] }); handleSubmit() }} className="btn-success">
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
            Status: {jState.accomlished}
          </div>
          <div>
            {jState.time}
          </div>
          <div className="btn-group">
            <button onClick={() => { setJState({ ...jState, accomlished: "Milestone Achieved", time: Date().toString() }); setZState({ ...zState, labels: ['Milestone 1', "Milestone 2", 'Milestone 3', 'Milestone 4', "Milestone 5", 'Milestone 6', 'Milestone 7', 'Milestone 8', 'Milestone 9', 'Milestone 10'], datasets: [{ data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1] }] }); handleSubmit() }} className="btn-success">
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
            Status: {kState.accomlished}
          </div>
          <div>
            {kState.time}
          </div>
          <div className="btn-group">
            <button onClick={() => { setKState({ ...kState, accomlished: "Milestone Achieved", time: Date().toString() }); setZState({ ...zState, labels: ['Milestone 1', "Milestone 2", 'Milestone 3', 'Milestone 4', "Milestone 5", 'Milestone 6', 'Milestone 7', 'Milestone 8', 'Milestone 9', 'Milestone 10', 'Milestone 11'], datasets: [{ data: [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] }] }); handleSubmit() }} className="btn-success">
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
            Status: {lState.accomlished}
          </div>
          <div>
            {lState.time}
          </div>
          <div className="btn-group">
            <button onClick={() => { setLState({ ...lState, accomlished: "Milestone Achieved", time: Date().toString() }); setZState({ ...zState, labels: ['Milestone 1', "Milestone 2", 'Milestone 3', 'Milestone 4', "Milestone 5", 'Milestone 6', 'Milestone 7', 'Milestone 8', 'Milestone 9', 'Milestone 10', 'Milestone 11', 'Milestone 12'], datasets: [{ data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] }] }); handleSubmit() }} className="btn-success">
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
            Status: {mState.accomlished}
          </div>
          <div>
            {mState.time}
          </div>
          <div className="btn-group">
            <button onClick={() => { setMState({ ...mState, accomlished: "Milestone Achieved", time: Date().toString() }); setZState({ ...zState, labels: ['Milestone 1', "Milestone 2", 'Milestone 3', 'Milestone 4', "Milestone 5", 'Milestone 6', 'Milestone 7', 'Milestone 8', 'Milestone 9', 'Milestone 10', 'Milestone 11', 'Milestone 12', 'Milestone 13'], datasets: [{ data: [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, ] }] }); handleSubmit() }} className="btn-success">
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
            Status: {nState.accomlished}
          </div>
          <div>
            {nState.time}
          </div>
          <div className="btn-group">
            <button onClick={() => { setNState({ ...nState, accomlished: "Milestone Achieved", time: Date().toString() }); setZState({ ...zState, labels: ['Milestone 1', "Milestone 2", 'Milestone 3', 'Milestone 4', "Milestone 5", 'Milestone 6', 'Milestone 7', 'Milestone 8', 'Milestone 9', 'Milestone 10', 'Milestone 11', 'Milestone 12', 'Milestone 13', 'Milestone 14'], datasets: [{ data: [ 1, 1, 1, 1, 1,1,1,1,1,1,1,1,1,1] }] }); handleSubmit() }} className="btn-success">
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
            Status: {oState.accomlished}
          </div>
          <div>
            {oState.time}
          </div>
          <div className="btn-group">
            <button onClick={() => { setOState({ ...oState, accomlished: "Milestone Achieved", time: Date().toString() }); setZState({ ...zState, labels: ['Milestone 1', "Milestone 2", 'Milestone 3', 'Milestone 4', "Milestone 5", 'Milestone 6', 'Milestone 7', 'Milestone 8', 'Milestone 9', 'Milestone 10', 'Milestone 11', 'Milestone 12', 'Milestone 13', "Milestone 14", "Milestone 15"], datasets: [{ data: [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] }] }); handleSubmit() }} className="btn-success">
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
            Status: {pState.accomlished}
          </div>
          <div>
            {pState.time}
          </div>
          <div className="btn-group">
            <button onClick={() => { setPState({ ...pState, accomlished: "Milestone Achieved", time: Date().toString() }); setZState({ ...zState, labels: ['Milestone 1', "Milestone 2", 'Milestone 3', 'Milestone 4', "Milestone 5", 'Milestone 6', 'Milestone 7', 'Milestone 8', 'Milestone 9', 'Milestone 10', 'Milestone 11', 'Milestone 12', 'Milestone 13', 'Milestone 16', 'Milestone'], datasets: [{ data: [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] }] }); handleSubmit() }} className="btn-success">
              Milestone Achieved!
             </button>
          </div> 
        </div>
         <br></br>
      </div>
    </div>
  );

}

export default App;

