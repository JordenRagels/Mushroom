import React, { Component } from 'react';
import Per from './PC'
import { Navigations } from '../../components/Navigations'

export default class Percentile extends Component {
    render() {
        return (
            <div>
                <Navigations/>
                <div className="heading">
                    <Per />
                </div>
            </div>
        )
    }
}

