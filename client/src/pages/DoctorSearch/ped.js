import React, { useState } from 'react';
import './ped.css'

function Ap() {
    const [pedState1, setPedState1] = useState({
        name: "",
        location: "",
        number: ""
    });
    const [pedState2, setPedState2] = useState({
        name: "",
        location: "",
        number: ""
    });
    const [pedState3, setPedState3] = useState({
        name: "",
        location: "",
        number: ""
    });
    const [pedState4, setPedState4] = useState({
        name: "",
        location: "",
        number: ""
    });
    const [pedState5, setPedState5] = useState({
        name: "",
        location: "",
        number: ""
    });
    return (
        <div>
            <input placeholder="Please put in your zip code"></input>
            <div className='result1'>
                {pedState1.name}
                <br></br>
                {pedState1.location}
                <br></br>
                {pedState1.number}
            </div>      
            <br></br>      
            <div className='result2'>
                {pedState2.name}
                <br></br>
                {pedState2.location}
                <br></br>
                {pedState2.number}
            </div>    
            <br></br>
            <div className='result3'>
                {pedState3.name}
                <br></br>
                {pedState3.location}
                <br></br>
                {pedState3.number}
            </div>   
            <br></br> 
            <div className='result4'>
                {pedState4.name}
                <br></br>
                {pedState4.location}
                <br></br>
                {pedState4.number}
            </div>    
            <br></br>
            <div className='result5'>
                {pedState5.name}
                <br></br>
                {pedState5.location}
                <br></br>
                {pedState5.number}
            </div>    
            <br></br>
            <button className="pedSearch" onClick={() => { setPedState1({ ...pedState1, name: "Tucson Central Pediatrics", location: "1628 N Alvernon Way", number: "(520)325-8000" }); setPedState2({...pedState2, name:"Tucson Pediatrics", location: "5170 E Glenn St", number:"(520)325-2684",}); setPedState3({...pedState3, name:"Dyson Pediatrics", location: "2222 N Craycroft", number:"(520)202-3488",}); setPedState4({...pedState4, name:"Catalina Pediatrics PC", location: "3085 N Swan Rd", number:"(520)323-3099",}); setPedState5({...pedState5, name:"Skyline Pediatrics", location: "4930 N 1st Ave", number:"(520)577-3333",}) }}>Find Pediatricians</button>
        <br></br>
        </div>
    )
}
export default Ap;