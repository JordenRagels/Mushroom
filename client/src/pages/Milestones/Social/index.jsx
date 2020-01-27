import React, { Component } from 'react';
import { Navigations } from '../../../components/Navigations/index';
import "./social.css";
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
                    if(i===0){
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
export default class Motor extends Component {
    chartRef = React.createRef();
    componentDidMount() {
        const myChartRef = this.chartRef.current.getContext("2d");
        
        new Chart(myChartRef, {
            type: "horizontalBar",
            data: {
                //Bring in data
                labels:["Holds Up Head Unsupported" , "Can Roll from Tummy to Back", "Pushes Up Onto Elbows While on Tummy", "Pushes Legs Down on Hard Surfaces", "Can Roll from Tummy to Back and Back to Tummy", "Can Sit Without Assistance", "Can Stand With Assistance", "Crawls on Hands and Knees", "Can Walk With Assistance","Can Stand Briefly Without Assistance", "Can Walk Breifly Without Assistance"],
                datasets: [
                    {
                       
                        data: [2, 3, 4, 4, 4, 5, 5,5,6,9,11] ,
                        backgroundColor:"white"
                    },
                    {
                        
                        data:[2,2,2,2,3,5,6,6,6,3,1],
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
                <Navigations/>
            <div className="heading">
            <h1>Motor Skills</h1>
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
