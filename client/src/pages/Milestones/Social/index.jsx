import React, { Component } from 'react';
import { Header } from '../../../components';
import "./social.css";
import App from '../../../App';
import Chart from "chart.js";
import Ap from './socialLog';
import ProgChart from './progress';

const barOptions_stacked = {
    tooltips: {
        enabled: false
    },
    hover :{
        animationDuration:0
    },
    scales: {
        xAxes: [{
            ticks: {
                beginAtZero:true,
                fontFamily: "'Open Sans Bold', sans-serif",
                fontSize:11
            },
            scaleLabel:{
                display:false
            },
            gridLines: {
            }, 
            stacked: true
        }],
        yAxes: [{
            gridLines: {
                display:false,
                color: "#fff",
                zeroLineColor: "#fff",
                zeroLineWidth: 0
            },
            ticks: {
                fontFamily: "'Open Sans Bold', sans-serif",
                fontSize:11
            },
            stacked: true
        }]
    },
    legend:{
        display:false
    },
    
    animation: {
        onComplete: function () {
            var chartInstance = this.chart;
            var ctx = chartInstance.ctx;
            ctx.textAlign = "left";
            ctx.font = "9px Open Sans";
            ctx.fillStyle = "#fff";

            Chart.helpers.each(this.data.datasets.forEach(function (dataset, i) {
                var meta = chartInstance.controller.getDatasetMeta(i);
                Chart.helpers.each(meta.data.forEach(function (bar, index) {
                   let data = dataset.data[index];
                    if(i==0){
                        ctx.fillText(data, 50, bar._model.y+4);
                    } else {
                        ctx.fillText(data, bar._model.x-25, bar._model.y+4);
                    }
                }),this)
            }),this);
        }
    },
    pointLabelFontFamily : "Quadon Extra Bold",
    scaleFontFamily : "Quadon Extra Bold",
};

export default class Social extends Component {
    chartRef = React.createRef();
    
    
    componentDidMount() {
        const myChartRef = this.chartRef.current.getContext("2d");
        
        new Chart(myChartRef, {
            type: "horizontalBar",
            data: {
                //Bring in data
                labels:["Smiles at People", "Can Self-Soothe for Short Periods", "Copies Movements and Facial Expressions", "Recognizes People Other Than Parents", "Responds to Other People's Emotions", "Likes to Look At Self in Mirror", "Can Clearly Distinguish Between Familiar People and Strangers", "Understands 'No'", "Has Favorite Toys", "Repeats Sounds and Actions to Get Specific Responses", "'Helps' with Activities Such as Dressing or Picking Out Books"],
                datasets: [
                    {
                       
                        data: [1,1,4,4,6,6,8,9,9,9,10,11] ,
                        backgroundColor:"white"
                    },
                    {
                        
                        data:[3,3,3,3,3,3,3,3,3,3,2,],
                        backgroundColor:"red",

                        
                    }
                ]
            },
            options: 

               barOptions_stacked
            
                //Customize chart options
            
        });
    }
    render() {
        return (
            <div>
            <div className="heading">
            <h1>Social Skills</h1>
            </div>
            <div className="n">
                <canvas
                    id="myChart"
                    ref={this.chartRef}
                />
            </div>
            <ProgChart/>
            <Ap/>
            </div>
        )
    }
}