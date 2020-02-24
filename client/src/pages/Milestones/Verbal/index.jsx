import React, { Component } from 'react';
import "./verbal.css";
import { Navigations } from '../../../components/Navigations'
import Chart from "chart.js";
import Ap from './verbalLog'

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

export default class Verbal extends Component {
    chartRef = React.createRef();

    componentDidMount() {
        const myChartRef = this.chartRef.current.getContext("2d");

        new Chart(myChartRef, {
            type: "horizontalBar",
            data: {
                //Bring in data
                labels: ["Coos and Gurgles", "Turns Head Toward Sounds", "Simple Babbles", "Attempts to Copy Sounds with Babbles", "Develops Distinct Cries Depending on Needs", "Strings Vowels Together While Babbling", "Responds to Name", "Begins to Make Consonant Sounds", "Copies Noises", "Has a Variety of Babbles", "Speaks Simple Words", "Sounds Change in Tones to Mimic Speech"],
                datasets: [
                    {
                        data: [1, 1, 3, 3, 3, 6, 8, 9, 9, 9, 10, 11],
                        backgroundColor: "#fefdfc",
                        color: "#fefdfc",
                        label: "Age in Months",
                    },
                    {
                        data: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2,1],
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
                    <h1>Verbal Skills</h1>
                </div>
                <div className="n">
                    <canvas
                        id="myChart"
                        ref={this.chartRef}
                    />
                </div>     
                <Ap />
                <br></br>
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


