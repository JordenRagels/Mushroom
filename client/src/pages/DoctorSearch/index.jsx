import React, { Component } from 'react';
import { NavBar } from '../../components/Navbar'
import Ap from './ped';
import { Footer } from '../../components/Footer'

class doctorSearch extends Component {
   render(){

    return (
        <div>
            <NavBar/>
            <h1 className="PS">Pediatrician Search</h1>
            <Ap/>
            <Footer/>
        </div>
   
    )
};
}
export default doctorSearch;