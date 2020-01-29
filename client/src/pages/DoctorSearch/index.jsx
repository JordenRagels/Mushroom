import React, { Component } from 'react';
import { Navigations } from '../../components/Navigations/index';
import { Input, FormBtn } from '../../components/Form'
import Ap from './ped';

class doctorSearch extends Component {
   render(){

    return (
        <div>
            <Navigations/>
            <h1 className="PS">Pediatrician Search</h1>
            <Ap/>
        </div>
   
    )
};
}
export default doctorSearch;