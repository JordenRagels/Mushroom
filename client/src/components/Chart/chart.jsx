import React, {Component} from 'react';
import { Bar } from 'react-chartjs-2';

class Chart extends Component {
    constructor(props){
        super(props);
        this.state = {
            chartData: {
                labels: ['Cognitive', 'Verbal', 'Motor', 'Social'],
                datasets:[
                    {
                        label: 'Milestones',
                        data: [10, 15, 5, 8, 16],
                        backgroundColor: [
                            '#3695E7',
                            '#39AEA9',
                            '#8BD7C1',
                            '#48B3A2',
                        ]
                    }
                ]
            }
        }
    }

    render() {
        return (
            <div className="chart">
                <Bar 
                data = {this.state.chartData}
                options= {{}}
                />
            </div>
        )
    }
}

export default Chart;