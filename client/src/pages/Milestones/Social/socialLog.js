import React, { useState } from "react";
import { Doughnut } from 'react-chartjs-2';
import axios from 'axios';

function Ap() {
  const [aState, setAState] = useState({
    accomlished: "Not Yet",
    name: ["Smiles at People"],
    time: ''
  });
  const [bState, setBState] = useState({
    accomlished: "Not Yet",
    name: ["Can Self-Soothe for Short Periods"],
    time: ''
  });
  const [cState, setCState] = useState({
    accomlished: "Not Yet",
    name: ["Copies Movements and Facial Expressions"],
    time: ''
  });
  const [dState, setDState] = useState({
    accomlished: "Not Yet",
    name: ["Recognizes People Other Than Parents"],
    time: ''
  });
  const [eState, setEState] = useState({
    accomlished: "Not Yet",
    name: ["Responds to Other People's Emotions"],
    time: ''
  });
  const [fState, setFState] = useState({
    accomlished: "Not Yet",
    name: ["Likes to Look at Self in Mirror"],
    time: ''
  });
  const [gState, setGState] = useState({
    accomlished: "Not Yet",
    name: ["Can Clearly Distinguish Between Familiar People and Strangers"],
    time: ''
  });
  const [hState, setHState] = useState({
    accomlished: "Not Yet",
    name: ["Understands 'No'"],
    time: ''
  });
  const [iState, setIState] = useState({
    accomlished: "Not Yet",
    name: ["Has Favorite Toys"],
    time: ''
  });
  const [jState, setJState] = useState({
    accomlished: "Not Yet",
    name: ["Repeats Sounds and Actions to Get Specific Reactions"],
    time: ''
  });
  const [kState, setKState] = useState({
    accomlished: "Not Yet",
    name: ["'Helps' with Activities such as Dressing or Picking Out Books"],
    time: ''
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
      data: [0],
      backgroundColor: "#48665f",
    }]
  });
  console.log(zState.labels);
  console.log(zState.datasets);
  console.log(zState.datasets.length);
  console.log(zState.datasets[0].data);



  return (
    <div className="socialLog">
      <h1>Social Milestones</h1>
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
            <button onClick={() => { setAState({ ...aState, accomlished: "Milestone Achieved", time: Date().toString() }); setZState({ ...zState, labels: ['Milestone 1'], datasets: [{ data: [1] }] }); handleSubmit() }} className="btn-success">
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
            <button onClick={() => { setBState({ ...bState, accomlished: "Milestone Achieved", time: Date().toString() }); setZState({ ...zState, labels: ['Milestone 1', "Milestone 2"], datasets: [{ data: [1, 1] }] }); handleSubmit() }} className="btn-success">
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
            <button onClick={() => { setCState({ ...cState, accomlished: "Milestone Achieved", time: Date().toString() }); setZState({ ...zState, labels: ['Milestone 1', "Milestone 2", "Milestone 3"], datasets: [{ data: [1, 1, 1] }] }); handleSubmit() }} className="btn-success">
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
            <button onClick={() => { setDState({ ...dState, accomlished: "Milestone Achieved", time: Date().toString() }); setZState({ ...zState, labels: ['Milestone 1', "Milestone 2", "Milestone 3", "Milestone 4"], datasets: [{ data: [ 1, 1, 1, 1] }] }); handleSubmit() }} className="btn-success">
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
            <button onClick={() => { setEState({ ...eState, accomlished: "Milestone Achieved", time: Date().toString() }); setZState({ ...zState, labels: ['Milestone 1', "Milestone 2", "Milestone 3", "Milestone 4", "Milestone 5"], datasets: [{ data: [ 1, 1, 1, 1, 1] }] }); handleSubmit() }} className="btn-success">
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
            <button onClick={() => { setFState({ ...fState, accomlished: "Milestone Achieved", time: Date().toString() }); setZState({ ...zState, labels: ['Milestone 1', "Milestone 2", "Milestone 3", 'Milestone 4', "Milestone 5", "Milestone 6"], datasets: [{ data: [1, 1, 1, 1, 1, 1] }] }); handleSubmit() }} className="btn-success">
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
            <button onClick={() => { setGState({ ...gState, accomlished: "Milestone Achieved", time: Date().toString() }); setZState({ ...zState, labels: ['Milestone 1', "Milestone 2", "Milestone 3", 'Milestone 4', "Milestone 5", "Milestone 6", "Milestone 7"], datasets: [{ data: [ 1, 1, 1, 1, 1, 1, 1] }] }); handleSubmit() }} className="btn-success">
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
            <button onClick={() => { setHState({ ...hState, accomlished: "Milestone Achieved", time: Date().toString() }); setZState({ ...zState, labels: ['Milestone 1', "Milestone 2", "Milestone 3", 'Milestone 4', "Milestone 5", "Milestone 6", "Milestone 7", "Milestone 8"], datasets: [{ data: [ 1, 1, 1, 1, 1, 1, 1, 1] }] }); handleSubmit() }} className="btn-success">
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
            <button onClick={() => { setIState({ ...iState, accomlished: "Milestone Achieved", time: Date().toString() }); setZState({ ...zState, labels: ['Milestone 1', "Milestone 2", "Milestone 3", 'Milestone 4', "Milestone 5", "Milestone 6", 'Milestone 7', "Milestone 8", "Milestone 9"], datasets: [{ data: [ 1, 1, 1, 1, 1, 1, 1, 1, 1] }] }); handleSubmit() }} className="btn-success">
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
            <button onClick={() => { setJState({ ...jState, accomlished: "Milestone Achieved", time: Date().toString() }); setZState({ ...zState, labels: ['Milestone 1', "Milestone 2", "Milestone 3", 'Milestone 4', "Milestone 5", "Milestone 6", 'Milestone 7', "Milestone 8", "Milestone 9", "Milestone 10"], datasets: [{ data: [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] }] }); handleSubmit() }} className="btn-success">
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
            <button onClick={() => { setKState({ ...kState, accomlished: "Milestone Achieved", time: Date().toString() }); setZState({ ...zState, labels: ['Milestone 1', "Milestone 2", "Milestone 3", 'Milestone 4', "Milestone 5", "Milestone 6", 'Milestone 7', "Milestone 8", "Milestone 9", "Milestone 10", "Milestone 11"], datasets: [{ data: [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] }] }); handleSubmit() }} className="btn-success">
              Milestone Achieved!
            </button>
          </div>
        </div>
      </div>
    </div>
  );

}

export default Ap;

