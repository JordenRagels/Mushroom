import React, { Component } from 'react';
import "./cognitive.css";
import Chart from "chart.js";
import Ap from './cogLog'
import { Navigations } from '../../../components/Navigations'

const barOptions_stacked = {
    tooltips: {
        enabled: false
    },
    hover: {
        animationDuration: 0
    },
    scales: {
        xAxes: [{
            ticks: {
                beginAtZero: true,
                fontFamily: "'Open Sans Bold', sans-serif",
                fontSize: 11
            },
            scaleLabel: {
                display: false
            },
            gridLines: {
            },
            stacked: true
        }],
        yAxes: [{
            gridLines: {
                display: false,
                color: "#fff",
                zeroLineColor: "#fff",
                zeroLineWidth: 0
            },
            ticks: {
                fontFamily: "'Open Sans Bold', sans-serif",
                fontSize: 11
            },
            stacked: true
        }]
    },
    legend: {
        display: false
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
                    if (i === 0) {
                        ctx.fillText(data, 50, bar._model.y + 4);
                    } else {
                        ctx.fillText(data, bar._model.x - 25, bar._model.y + 4);
                    }
                }), this)
            }), this);
        }
    },
    pointLabelFontFamily: "Quadon Extra Bold",
    scaleFontFamily: "Quadon Extra Bold",
};

export default class Cognitive extends Component {
    chartRef = React.createRef();


    componentDidMount() {
        let myChartRef = this.chartRef.current;

        new Chart(myChartRef, {
            type: "horizontalBar",
            data: {
                //Bring in data
                labels: ["Follows Things With Eyes", "Begins to Get Bored When There is Not Enough Stimulation", "Responds to Affection", "Uses Hands and Eyes Together", "Brings Things to Mouth", "Shows Curiosity (Sees Things Out of Reach and Tries to Get Them", "Passes Things from Hand to Hand", "Looks for Things When Hidden", "Picks Up Things Between Thumb and Finger", "Watches the Path of Moving Things", ("Interacts with Things in Various Ways (Shaking and Throwing Things)"), ("Pokes and Points with Index Finger"), ("Follows Simple Directions"), ("Looks or Points at Things or Pictures of Things When Tey Are Named"), ("Uses Items Correctly (Able to Drink From Cup"), ("Able to Take Things In and Out of Containers")],
                
                datasets: [
                    {
                        data: [1, 2, 3, 4, 5, 6, 9, 9, 9, 9, 10, 10, 11, 11, 11, 11],
                        backgroundColor: "#fefdfc",
                        color: "#fefdfc"
                    },
                    {
                        data: [1, 1, 2, 2, 5, 4, 3, 3, 3, 3, 2, 2, 1, 1, 1, 1],
                        backgroundColor: "#48665f",
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
                <div className="background">
                <div className="heading">
                    <h1>Cognitive Skills</h1>
                </div>
                <div className="n">
                    <canvas
                        id="myChart"
                        ref={this.chartRef}
                    />
                </div>
                <Ap />
            </div>
            <div className="footer">
                    <div className="footer-copyright-milc">
                        <h7 id="src"> Information Sourced from the Center for Disease Control and The World Health Organization</h7>
                        <br></br>
                        <h8 id="cop"> &copy; 2020 Copyright: Mushroom</h8>
                    </div>
                </div>
            </div>
        )
    }
}