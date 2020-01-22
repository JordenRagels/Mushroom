
import React from 'react';
import { Doughnut } from 'react-chartjs-2';


const data = {
    labels: ['Red'],
    datasets: [{
        data: [10, 20, 30],
        backgroundColor:'red'
    }
    ],
}


class ProgChart extends React.Component {
    

    render() {
        return (
            <Doughnut data={data} />
        )
    };
}


export default ProgChart;


